"use client"; // может ли моя функция выполняться в клиенте?

import { signup } from "@/app/utils/actions";

const RegisterForm = () => {
  return (
    <div>
      <h3 className='text-xl text-lightGray'>Давай познакомимся!</h3>
      <p className='mt-2.5 text-xs text-lightGray'>Личный кабинет понадобиться для оформления и отслеживания заказа</p>

      <form className='mt-7 flex w-full flex-col'>
        {/* Запрос на ввод данных пользователя */}

        <label className='block text-sm font-medium opacity-40'>ФИО</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='text'
          name='fio'
          placeholder='ФИО'
          id='fio'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Номер телефона</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='text'
          name='phone'
          placeholder='Номер телефона'
          id='phone'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Почта</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='email'
          name='email'
          placeholder='Почта'
          id='email'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Город</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='text'
          name='city'
          placeholder='Город'
          id='city'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Компания</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='text'
          name='companyName'
          placeholder='Название компании'
          id='companyName'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Вид деятельности</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='text'
          name='companyActivity'
          placeholder='Вид деятельности компании'
          id='companyActivity'
          required
        />

        <label className='mt-5 block text-sm font-medium opacity-40'>Пароль</label>
        <input
          className='mt-2.5 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
          type='password'
          id='password'
          name='password'
          placeholder='Пароль'
          minLength={6}
          required
        />

        <button
          type='submit'
          formAction={signup}
          className='mt-7 block rounded-md bg-standartGreen px-4 py-1.5 font-normal text-white'
        >
          Подтвердить регистрацию
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
