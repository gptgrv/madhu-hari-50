import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "wishes.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "hari-madhu-50";

interface Wish {
  id: string;
  name: string;
  relation: string;
  message: string;
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
  await fs.writeFile(DATA_FILE, JSON.stringify(wishes, null, 2));
}

export async function POST(req: NextRequest) {
  const { id, approved, password } = await req.json();
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const wishes = await readWishes();
  const wish = wishes.find((w) => w.id === id);
  if (!wish) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  wish.approved = approved;
  await writeWishes(wishes);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const { id, password } = await req.json();
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let wishes = await readWishes();
  wishes = wishes.filter((w) => w.id !== id);
  await writeWishes(wishes);
  return NextResponse.json({ success: true });
}
