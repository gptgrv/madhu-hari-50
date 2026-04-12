import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin, WALL_OF_LOVE_BUCKET } from "@/lib/supabase-admin";
import { formatWish, isAdminAuthorized } from "@/lib/wishes";

export async function GET(req: NextRequest) {
  const supabaseAdmin = getSupabaseAdmin();
  const password = req.headers.get("x-admin-password");
  const isAdmin = password ? isAdminAuthorized(password) : false;

  let query = supabaseAdmin.from("wishes").select("*").order("timestamp", {
    ascending: false,
  });

  if (!isAdmin) {
    query = query.eq("approved", true);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ wishes: (data ?? []).map(formatWish) });
}

export async function POST(req: NextRequest) {
  const supabaseAdmin = getSupabaseAdmin();
  const formData = await req.formData();
  const name = formData.get("name");
  const message = formData.get("message");
  const media = formData.get("media");

  if (typeof name !== "string" || typeof message !== "string") {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedMessage) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const id = randomUUID();
  let mediaUrl: string | null = null;
  let mediaPath: string | null = null;
  let mediaType: string | null = null;

  if (media instanceof File && media.size > 0) {
    const ext = media.name.includes(".") ? media.name.split(".").pop() : "";
    const safeExt = ext ? `.${ext.toLowerCase()}` : "";
    mediaPath = `${id}/${Date.now()}${safeExt}`;
    mediaType = media.type || null;

    const { error: uploadError } = await supabaseAdmin.storage
      .from(WALL_OF_LOVE_BUCKET)
      .upload(mediaPath, media, {
        contentType: media.type || undefined,
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    const { data: publicUrlData } = supabaseAdmin.storage
      .from(WALL_OF_LOVE_BUCKET)
      .getPublicUrl(mediaPath);

    mediaUrl = publicUrlData.publicUrl;
  }

  const timestamp = new Date().toISOString();
  const { data, error } = await supabaseAdmin
    .from("wishes")
    .insert({
      id,
      name: trimmedName,
      message: trimmedMessage,
      media_url: mediaUrl,
      media_path: mediaPath,
      media_type: mediaType,
      timestamp,
      approved: true,
    })
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, wish: formatWish(data) }, { status: 201 });
}
