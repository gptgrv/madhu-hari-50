import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "wishes.json");

interface Wish {
  id: string;
  name: string;
  relation: string;
  message: string;
  photo?: string;
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
  const body = await req.json();
  const { name, relation, message } = body;

  if (!name || !relation || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const wishes = await readWishes();
  const newWish: Wish = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name: name.trim(),
    relation: relation.trim(),
    message: message.trim(),
    timestamp: Date.now(),
    approved: false, // Requires manual approval
  };

  wishes.push(newWish);
  await writeWishes(wishes);

  return NextResponse.json({ success: true, id: newWish.id });
}
