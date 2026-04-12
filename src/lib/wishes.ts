export interface Wish {
  id: string;
  name: string;
  message: string;
  mediaUrl: string | null;
  mediaPath: string | null;
  mediaType: string | null;
  timestamp: string;
  approved: boolean;
}

interface WishRow {
  id: string;
  name: string;
  message: string;
  media_url: string | null;
  media_path: string | null;
  media_type: string | null;
  timestamp: string;
  approved: boolean;
}

export function isAdminAuthorized(password: string | null) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    throw new Error("Missing ADMIN_PASSWORD environment variable.");
  }

  return password === adminPassword;
}

export function formatWish(row: WishRow): Wish {
  return {
    id: row.id,
    name: row.name,
    message: row.message,
    mediaUrl: row.media_url,
    mediaPath: row.media_path,
    mediaType: row.media_type,
    timestamp: row.timestamp,
    approved: row.approved,
  };
}
