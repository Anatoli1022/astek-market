import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { createServerUser } from "@/app/utils/supabase/server";

export async function POST(request: Request) {
  const supabase = await createServerUser();

  await supabase.auth.signOut();

  // Очищаем кэш и обновляем страницу
  revalidatePath("/", "layout");

  // Используем request.url как базовый URL
  const baseUrl = new URL(request.url).origin;
  return NextResponse.redirect(new URL("/", baseUrl), {
    status: 302,
  });
}
