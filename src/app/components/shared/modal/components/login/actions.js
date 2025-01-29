"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createServerUser } from "@/app/utils/supabase/server";

export async function login(formData) {
  const supabase = await createServerUser();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
