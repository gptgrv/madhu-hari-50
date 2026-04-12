import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "wishes.json");
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

interface Wish {
  id: string;
  name: string;
  message: string;
  mediaUrl?: string;
  mediaType?: string;
  timestamp: number;
  approved: boolean;
}

async function readWishes(): Promise<Wish[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeWishes(wishes: Wish[]) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(wishes, null, 2));
}

export async function GET() {
  const wishes = await readWishes();
  return NextResponse.json({ wishes });
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;
  const media = formData.get("media") as File | null;

  if (!name || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  let mediaUrl: string | undefined;
  let mediaType: string | undefined;

  if (media && media.size > 0) {
    await fs.mkdir(UPLOADS_DIR, { recursive: true });
    const ext = media.name.split(".").pop() || "bin";
    const filename = `${id}.${ext}`;
    const buffer = Buffer.from(await media.arrayBuffer());
    await fs.writeFile(path.join(UPLOADS_DIR, filename), buffer);
    mediaUrl = `/uploads/${filename}`;
    mediaType = media.type;
  }

  const wishes = await readWishes();
  const newWish: Wish = {
    id,
    name: name.trim(),
    message: message.trim(),
    mediaUrl,
    mediaType,
    timestamp: Date.now(),
    approved: false,
  };

  wishes.push(newWish);
  await writeWishes(wishes);

  return NextResponse.json({ success: true, id });
}
