"use client";
import { type User } from "@supabase/supabase-js";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { createClientUser } from "@/app/utils/supabase/client";

export default function Profile({ user }: { user: User | null }) {
  const supabase = createClientUser();
  const [loading, setLoading] = useState(true);
  const [fio, setFio] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState<string | null>(null);
  const [companyActivity, setCompanyActivity] = useState<string | null>(null);

  // Fetch the profile data
  const getProfile = useCallback(async () => {
    if (!user) return;
    try {
      setLoading(true);
      const { data, error, status } = await supabase
        .from("users")
        .select("fio, email, phone, city, company_name, company_activity")
        .eq("id", user?.id)
        .single();
      if (error && status !== 406) {
        console.error(error);
        throw error;
      }
      if (data) {
        setFio(data.fio);
        setEmail(data.email);
        setPhone(data.phone);
        setCity(data.city);
        setCompanyName(data.company_name);
        setCompanyActivity(data.company_activity);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      getProfile();
    }
  }, [user, getProfile]); // Добавляем getProfile в массив зависимостей

  async function updateProfile({
    fio,
    email,
    phone,
    city,
    companyName,
    companyActivity,
  }: {
    fio: string | null;
    email: string | null;
    phone: string | null;
    city: string | null;
    companyName: string | null;
    companyActivity: string | null;
  }) {
    try {
      setLoading(true);
      const { error } = await supabase.from("users").upsert({
        id: user?.id as string,
        fio: fio || "",
        email: email || "",
        phone: phone || "",
        city: city || "",
        company_name: companyName || "",
        company_activity: companyActivity || "",
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating the profile!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='form-widget'>
      <div className='flex w-full flex-col gap-y-2.5'>
        <label className='text-sm font-medium opacity-40'>ФИО</label>
        <input
          required
          value={fio || ""}
          placeholder={fio || ""}
          onChange={(e) => setFio(e.target.value)}
          type='text'
          className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <label className='text-sm font-medium opacity-40'>Почта</label>
        <input
          required
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <label className='text-sm font-medium opacity-40'>Телефон</label>
        <input
          required
          value={phone || ""}
          onChange={(e) => setPhone(e.target.value)}
          type='text'
          className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <label className='text-sm font-medium opacity-40'>Город</label>
        <input
          required
          value={city || ""}
          onChange={(e) => setCity(e.target.value)}
          type='text'
          className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <label className='text-sm font-medium opacity-40'>Компания</label>
        <input
          required
          value={companyName || ""}
          onChange={(e) => setCompanyName(e.target.value)}
          type='text'
          className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <label className='text-sm font-medium opacity-40'>Деятельность компании</label>
        <input
          required
          value={companyActivity || ""}
          onChange={(e) => setCompanyActivity(e.target.value)}
          type='text'
          className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <button
          className='mt-7 block rounded-md bg-standartGreen px-4 py-1.5 font-normal text-white'
          onClick={() => updateProfile({ fio, email, phone, city, companyName, companyActivity })}
          disabled={loading}
        >
          {loading ? "Отправка" : "Сохранить изменения"}
        </button>

        <Link
          href='/forgot-password'
          className='mt-2.5 block rounded-md bg-standartGreen/30 px-4 py-1.5 text-center text-sm font-normal text-standartGreen'
        >
          Изменить пароль
        </Link>
      </div>
    </div>
  );
}
