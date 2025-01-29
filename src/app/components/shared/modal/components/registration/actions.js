"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createServerUser } from "@/app/utils/supabase/server";

export async function signup(formData) {
  const supabase = await createServerUser();

  // Получаем данные из формы
  const email = formData.get("email");
  const password = formData.get("password");
  const fio = formData.get("fio");
  const phone = formData.get("phone");
  const city = formData.get("city");
  const companyName = formData.get("companyName");
  const companyActivity = formData.get("companyActivity");

  // Шаг 1: Регистрация пользователя в таблице auth
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    // Ошибка регистрации
    redirect("/error");
  }

  // Шаг 2: Добавляем дополнительные данные в таблицу users
  const { error: insertError } = await supabase.from("users").insert([
    {
      id: data.user.id, // ID пользователя, полученный после регистрации
      email: data.user.email,
      fio: fio,
      phone: phone,
      city: city,
      company_name: companyName,
      company_activity: companyActivity,
    },
  ]);

  if (insertError) {
    // Ошибка при добавлении данных в users

    redirect("/error");
  }

  // Шаг 3: Редирект на страницу входа
  revalidatePath("/", "layout");
  redirect("/");
}
