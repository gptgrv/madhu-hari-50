"use client";
import { useState, useEffect } from "react";

interface Wish {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: number;
  approved: boolean;
}

export default function AdminPage() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (authed) fetchWishes();
  }, [authed]);

  async function fetchWishes() {
    const res = await fetch("/api/wishes");
    const data = await res.json();
    setWishes(data.wishes || []);
  }

  async function toggleApproval(id: string, approved: boolean) {
    await fetch("/api/wishes/approve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, approved, password }),
    });
    fetchWishes();
  }

  async function deleteWish(id: string) {
    await fetch("/api/wishes/approve", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, password }),
    });
    fetchWishes();
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 shadow-md max-w-sm w-full">
          <h1 className="font-serif text-2xl font-bold text-center mb-6">Admin</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gold-light/40 mb-4 outline-none focus:border-gold"
            onKeyDown={(e) => e.key === "Enter" && setAuthed(true)}
          />
          <button
            onClick={() => setAuthed(true)}
            className="w-full bg-gold text-white py-3 rounded-xl font-semibold"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl font-bold mb-2">Wall of Love — Admin</h1>
        <p className="text-text-muted mb-8">{wishes.length} total wishes</p>

        <div className="space-y-4">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className={`bg-white rounded-2xl p-6 border ${
                wish.approved ? "border-green-300" : "border-orange-300"
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="font-semibold">{wish.name}</span>
                  <span className="text-text-muted text-sm ml-2">({wish.relation})</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  wish.approved ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                }`}>
                  {wish.approved ? "Approved" : "Pending"}
                </span>
              </div>
              <p className="text-text-dark mb-4 italic">&ldquo;{wish.message}&rdquo;</p>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleApproval(wish.id, !wish.approved)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    wish.approved
                      ? "bg-orange-100 text-orange-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {wish.approved ? "Unapprove" : "Approve"}
                </button>
                <button
                  onClick={() => deleteWish(wish.id)}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
