"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createServerUser } from "@/app/utils/supabase/server";

const sendResetPasswordEmail = async (prev, formData) => {
  const supabase = await createServerUser();
  const {
    //data
    error,
  } = await supabase.auth.resetPasswordForEmail(formData.get("email"));
  if (error) {
    console.log("error", error);

    return {
      success: "",
      error: error.message,
    };
  }

  return {
    success: "Пожалуйста, проверьте свою электронную почту",
    error: "",
  };
};

const updatePassword = async (prev, formData) => {
  const supabase = await createServerUser();

  const {
    // data

    error,
  } = await supabase.auth.updateUser({
    password: formData.get("password"),
  });

  if (error) {
    console.log("error", error);

    return {
      success: "",
      error: error.message,
    };
  }

  return {
    success: "Password updated",
    error: "",
  };
};

const login = async (formData) => {
  const supabase = await createServerUser();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log("error", error);
    return {
      success: "",
      error: "Пожалуйста, проверьте введенные данные и попробуйте снова",
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
};

const signup = async (formData) => {
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
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  // Логируем ошибку, если она возникла
  if (error) {
    console.log("Ошибка при регистрации:", error);

    return {
      success: "",
      error: "Пожалуйста, проверьте введенные данные и попробуйте снова",
    };
  }

  // Если регистрация успешна, логируем ответ
  console.log("Регистрация успешна:", data);

  // Шаг 2: Добавляем дополнительные данные в таблицу users
  const { error: insertError } = await supabase.from("users").insert([
    {
      id: data.user.id,
      email: data.user.email,
      fio: fio,
      phone: phone,
      city: city,
      company_name: companyName,
      company_activity: companyActivity,
    },
  ]);

  // Логируем ошибку вставки данных, если она возникла
  if (insertError) {
    console.log("Ошибка при вставке данных в таблицу users:", insertError);
    return {
      success: "",
      error: "Пожалуйста, проверьте введенные данные и попробуйте снова",
    };
  }

  return {
    success: "Пожалуйста, проверьте свою электронную почту",
    error: "",
  };
};

export { login, sendResetPasswordEmail, signup, updatePassword };
