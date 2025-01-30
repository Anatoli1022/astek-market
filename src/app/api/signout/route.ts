import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { createServerUser } from "@/app/utils/supabase/server";

export async function POST() {
  const supabase = await createServerUser();

  // Проверяем, авторизован ли пользователь
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await supabase.auth.signOut();
  }

  // Очищаем кэш и обновляем страницу
  revalidatePath("/", "layout");
  return NextResponse.redirect(new URL("/", "/"), {
    status: 302,
  });
}
