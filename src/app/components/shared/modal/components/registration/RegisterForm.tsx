"use client";

import { useState } from "react";

import { signup } from "@/app/utils/actions";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const result = await signup(formData);

    if (result.error) {
      setError(result.error);
      setSuccess("");
    } else {
      setError("");
      setSuccess(result.success);
    }
  };

  return (
    <div>
      <h3 className='text-xl text-lightGray'>Давай познакомимся!</h3>
      <p className='mt-2.5 text-xs text-lightGray'>Личный кабинет понадобится для оформления и отслеживания заказа</p>

      <form action={handleSubmit} className='mt-7 flex w-full flex-col'>
        {/* Запрос на ввод данных пользователя */}
        <label className='block text-sm font-medium opacity-40'>ФИО</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='text'
          name='fio'
          placeholder='ФИО'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Номер телефона</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='text'
          name='phone'
          placeholder='Номер телефона'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Почта</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='email'
          name='email'
          placeholder='Почта'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Город</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='text'
          name='city'
          placeholder='Город'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Компания</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='text'
          name='companyName'
          placeholder='Название компании'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Вид деятельности</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='text'
          name='companyActivity'
          placeholder='Вид деятельности компании'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Пароль</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='password'
          name='password'
          placeholder='Пароль'
          minLength={6}
          required
        />

        <button type='submit' className='mt-7 block rounded-md bg-standartGreen px-4 py-1.5 font-normal text-white'>
          Подтвердить регистрацию
        </button>

        {error && (
          <div role='alert' className='alert alert-error mt-4'>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div role='alert' className='alert alert-info mt-4'>
            <span>{success}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
