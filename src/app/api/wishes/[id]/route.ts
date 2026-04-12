import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin, WALL_OF_LOVE_BUCKET } from "@/lib/supabase-admin";
import { formatWish, isAdminAuthorized } from "@/lib/wishes";

type RouteContext = {
  params: Promise<{ id: string }>;
};

function adminUnauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function PATCH(req: NextRequest, context: RouteContext) {
  const supabaseAdmin = getSupabaseAdmin();
  const password = req.headers.get("x-admin-password");

  if (!isAdminAuthorized(password)) {
    return adminUnauthorized();
  }

  const { id } = await context.params;
  const body = (await req.json()) as {
    name?: string;
    message?: string;
    approved?: boolean;
  };

  const updates: Record<string, string | boolean> = {};

  if (typeof body.name === "string") {
    updates.name = body.name.trim();
  }

  if (typeof body.message === "string") {
    updates.message = body.message.trim();
  }

  if (typeof body.approved === "boolean") {
    updates.approved = body.approved;
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "No updates provided" }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("wishes")
    .update(updates)
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ wish: formatWish(data) });
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  const supabaseAdmin = getSupabaseAdmin();
  const password = req.headers.get("x-admin-password");

  if (!isAdminAuthorized(password)) {
    return adminUnauthorized();
  }

  const { id } = await context.params;

  const { data: wish, error: fetchError } = await supabaseAdmin
    .from("wishes")
    .select("media_path")
    .eq("id", id)
    .single();

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  if (wish?.media_path) {
    const { error: storageError } = await supabaseAdmin.storage
      .from(WALL_OF_LOVE_BUCKET)
      .remove([wish.media_path]);

    if (storageError) {
      return NextResponse.json({ error: storageError.message }, { status: 500 });
    }
  }

  const { error } = await supabaseAdmin.from("wishes").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
