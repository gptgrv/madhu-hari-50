"use client";
import { useState, useEffect, useRef } from "react";
import type { Wish } from "@/lib/wishes";

export default function WallOfLove() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  
  async function fetchWishes() {
    try {
      const res = await fetch("/api/wishes");
      if (res.ok) {
        const data = await res.json();
        setWishes(data.wishes || []);
      }
    } catch {
      // Silent fail
    }
  }

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const res = await fetch("/api/wishes");
        if (!res.ok) return;

        const data = await res.json();
        if (!cancelled) {
          setWishes(data.wishes || []);
        }
      } catch {
        // Silent fail
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    // 10MB limit
    if (f.size > 10 * 1024 * 1024) {
      alert("File too large. Max 10MB.");
      return;
    }
    setFile(f);
    if (f.type.startsWith("image/")) {
      setFilePreview(URL.createObjectURL(f));
    } else if (f.type.startsWith("video/")) {
      setFilePreview("video");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("message", form.message);
      if (file) formData.append("media", file);

      const res = await fetch("/api/wishes", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        await fetchWishes();
        setSubmitted(true);
        setForm({ name: "", message: "" });
        setFile(null);
        setFilePreview(null);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  const approvedWishes = wishes.filter((w) => w.approved);

  return (
    <section id="wall-of-love" className="py-20 px-4 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-center font-bold text-text-dark mb-2">
          Wall of Love
        </h2>
        <p className="text-center text-gold-dark font-[family-name:var(--font-serif)] italic text-xl mb-4">
          प्यार की दीवार
        </p>
        <p className="text-center text-text-muted mb-12 max-w-2xl mx-auto">
          Messages from friends and family who&apos;ve been part of this beautiful journey.
          Share your love, memories, and wishes!
        </p>

        {/* Submit button */}
        <div className="text-center mb-12">
          <button
            onClick={() => { setShowForm(!showForm); setSubmitted(false); }}
            className="bg-gradient-to-r from-gold-dark to-gold text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            💌 Share Your Wishes
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="max-w-xl mx-auto mb-16 bg-white rounded-2xl p-8 shadow-md border border-gold-light/30">
            {submitted ? (
              <div className="text-center py-8">
                <span className="text-5xl block mb-4">💛</span>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl font-semibold text-text-dark mb-2">
                  Thank You!
                </h3>
                <p className="text-text-muted">
                  Your message is now live on the wall. Thank you for sharing your love. 🙏
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Your Name / आपका नाम
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gold-light/40 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition bg-cream/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Your Message / संदेश
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gold-light/40 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition bg-cream/50 resize-none"
                    placeholder="Share a memory, wish, or message for Dr Hari & Madhu ji..."
                  />
                </div>

                {/* File upload */}
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Add a Photo or Video / फ़ोटो या वीडियो (optional)
                  </label>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-gold-light/40 hover:border-gold transition bg-cream/30 text-text-muted text-sm"
                  >
                    {file ? `✅ ${file.name}` : "📷 Tap to upload photo or video"}
                  </button>
                  {filePreview && filePreview !== "video" && (
                    <div className="mt-3 relative">
                      <img src={filePreview} alt="Preview" className="w-full max-h-48 object-cover rounded-xl" />
                      <button
                        type="button"
                        onClick={() => { setFile(null); setFilePreview(null); }}
                        className="absolute top-2 right-2 bg-black/60 text-white w-6 h-6 rounded-full text-xs"
                      >✕</button>
                    </div>
                  )}
                  {filePreview === "video" && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-text-muted">
                      <span>🎬</span> <span>{file?.name}</span>
                      <button
                        type="button"
                        onClick={() => { setFile(null); setFilePreview(null); }}
                        className="text-red-500 ml-auto"
                      >Remove</button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-maroon to-maroon-light text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Send Your Love 💛"}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Wishes grid */}
        {approvedWishes.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {approvedWishes.map((wish) => (
              <div
                key={wish.id}
                className="break-inside-avoid bg-white rounded-2xl p-6 shadow-sm border border-gold-light/20 hover:shadow-md hover:border-gold-light/40 transition-all duration-300"
              >
                {wish.mediaUrl && wish.mediaType?.startsWith("image") && (
                  <img src={wish.mediaUrl} alt="" className="w-full rounded-xl mb-4 object-cover max-h-64" />
                )}
                {wish.mediaUrl && wish.mediaType?.startsWith("video") && (
                  <video src={wish.mediaUrl} controls className="w-full rounded-xl mb-4 max-h-64" />
                )}
                <p className="text-text-dark leading-relaxed mb-4 italic">
                  &ldquo;{wish.message}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white text-sm font-bold">
                    {wish.name[0]}
                  </div>
                  <p className="text-sm font-semibold text-text-dark">{wish.name}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <span className="text-4xl block mb-4">💌</span>
            <p className="text-text-muted italic">
              Be the first to share your love and wishes!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
