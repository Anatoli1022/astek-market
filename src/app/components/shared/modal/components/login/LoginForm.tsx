"use client";
import Link from "next/link";
import { useState } from "react";

import { login } from "@/app/utils/actions";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const result = await login(formData);

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
      <h3 className='text-xl text-lightGray'>Добро пожаловать на сайт компании Astek</h3>
      <p className='mt-2.5 text-xs text-lightGray'>Личный кабинет понадобиться для оформления и отслеживания заказа</p>
      <form action={handleSubmit} className='mt-8 flex w-full flex-col'>
        <label className='block text-sm font-medium opacity-40'>Почта</label>
        <input
          name='email'
          type='email'
          id='email'
          placeholder='Почта'
          required
          className='mt-2.5 rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <label className='mt-5 block text-sm font-medium opacity-40'>Пароль</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Пароль'
          required
          minLength={6}
          className='mt-2.5 rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <button
          type='submit'
          className='mt-7 block rounded-md bg-standartGreen px-4 py-1.5 text-sm font-normal text-white'
        >
          Войти
        </button>

        <p className='mt-2'>
          <Link
            href='/forgot-password'
            className='mt-2.5 block rounded-md bg-standartGreen/30 px-4 py-1.5 text-center text-sm font-normal text-standartGreen'
          >
            Забыли пароль?
          </Link>
        </p>
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

export default LoginForm;
