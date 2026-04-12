"use client";

import { useEffect, useState } from "react";
import type { Wish } from "@/lib/wishes";

interface EditState {
  name: string;
  message: string;
}

export default function AdminPage() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [editState, setEditState] = useState<Record<string, EditState>>({});

  async function fetchWishes(adminPassword: string) {
    const res = await fetch("/api/wishes", {
      headers: {
        "x-admin-password": adminPassword,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Unable to load wishes");
    }

    const nextWishes = data.wishes || [];
    setWishes(nextWishes);
    setEditState(
      Object.fromEntries(
        nextWishes.map((wish: Wish) => [
          wish.id,
          { name: wish.name, message: wish.message },
        ])
      )
    );
  }

  useEffect(() => {
    if (!authed) {
      return;
    }

    void fetchWishes(password).catch((err: Error) => {
      setAuthed(false);
      setError(err.message);
    });
  }, [authed, password]);

  async function handleLogin() {
    try {
      setError("");
      await fetchWishes(password);
      setAuthed(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to log in");
      setAuthed(false);
    }
  }

  async function updateWish(id: string, updates: Partial<Wish>) {
    setSavingId(id);
    setError("");

    try {
      const res = await fetch(`/api/wishes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify(updates),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to update wish");
      }

      setWishes((current) =>
        current.map((wish) => (wish.id === id ? data.wish : wish))
      );
      setEditState((current) => ({
        ...current,
        [id]: {
          name: data.wish.name,
          message: data.wish.message,
        },
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to update wish");
    } finally {
      setSavingId(null);
    }
  }

  async function deleteWish(id: string) {
    setSavingId(id);
    setError("");

    try {
      const res = await fetch(`/api/wishes/${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-password": password,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to delete wish");
      }

      setWishes((current) => current.filter((wish) => wish.id !== id));
      setEditState((current) => {
        const next = { ...current };
        delete next[id];
        return next;
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to delete wish");
    } finally {
      setSavingId(null);
    }
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                void handleLogin();
              }
            }}
          />
          {error ? (
            <p className="text-sm text-red-600 mb-4 text-center">{error}</p>
          ) : null}
          <button
            onClick={() => void handleLogin()}
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
        <p className="text-text-muted mb-2">{wishes.length} total wishes</p>
        <p className="text-text-muted mb-8">
          You can edit messages, change approval, or remove entries from here.
        </p>
        {error ? <p className="text-sm text-red-600 mb-6">{error}</p> : null}

        <div className="space-y-4">
          {wishes.map((wish) => {
            const isSaving = savingId === wish.id;
            const currentEdit = editState[wish.id] || {
              name: wish.name,
              message: wish.message,
            };

            return (
              <div
                key={wish.id}
                className={`bg-white rounded-2xl p-6 border ${
                  wish.approved ? "border-green-300" : "border-orange-300"
                }`}
              >
                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                  <div>
                    <p className="font-semibold text-text-dark">{wish.name}</p>
                    <p className="text-text-muted text-sm">
                      {new Date(wish.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      wish.approved
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {wish.approved ? "Approved" : "Hidden"}
                  </span>
                </div>

                <div className="space-y-3">
                  <input
                    type="text"
                    value={currentEdit.name}
                    onChange={(e) =>
                      setEditState((current) => ({
                        ...current,
                        [wish.id]: {
                          name: e.target.value,
                          message: currentEdit.message,
                        },
                      }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gold-light/40 outline-none focus:border-gold"
                  />
                  <textarea
                    rows={4}
                    value={currentEdit.message}
                    onChange={(e) =>
                      setEditState((current) => ({
                        ...current,
                        [wish.id]: {
                          name: currentEdit.name,
                          message: e.target.value,
                        },
                      }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gold-light/40 outline-none focus:border-gold resize-none"
                  />
                </div>

                {wish.mediaUrl && wish.mediaType?.startsWith("image") ? (
                  <img
                    src={wish.mediaUrl}
                    alt=""
                    className="w-full rounded-xl mt-4 object-cover max-h-80"
                  />
                ) : null}

                {wish.mediaUrl && wish.mediaType?.startsWith("video") ? (
                  <video
                    src={wish.mediaUrl}
                    controls
                    className="w-full rounded-xl mt-4 max-h-80"
                  />
                ) : null}

                <div className="flex flex-wrap gap-2 mt-5">
                  <button
                    onClick={() =>
                      void updateWish(wish.id, {
                        name: currentEdit.name,
                        message: currentEdit.message,
                      })
                    }
                    disabled={isSaving}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gold text-white disabled:opacity-60"
                  >
                    Save
                  </button>
                  <button
                    onClick={() =>
                      void updateWish(wish.id, { approved: !wish.approved })
                    }
                    disabled={isSaving}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      wish.approved
                        ? "bg-orange-100 text-orange-700"
                        : "bg-green-100 text-green-700"
                    } disabled:opacity-60`}
                  >
                    {wish.approved ? "Hide" : "Approve"}
                  </button>
                  <button
                    onClick={() => void deleteWish(wish.id)}
                    disabled={isSaving}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-700 disabled:opacity-60"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
