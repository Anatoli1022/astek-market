import React from "react";

const Profile = () => {
  return (
    <form action='' className='flex w-full flex-col gap-y-2.5'>
      <input type='file' className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm' name='' />
      <label className='text-sm font-medium opacity-40'>ФИО</label>
      <input type='text' className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm' name='' />
      <div>
        <input type='checkbox' /> <input type='checkbox' />
      </div>
      <label className='text-sm font-medium opacity-40'>Почта</label>
      <input type='text' className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm' name='' />
      <label className='text-sm font-medium opacity-40'>Телефон</label>
      <input type='text' className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm' name='' />
      <label className='text-sm font-medium opacity-40'>Город</label>
      <input type='text' className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm' name='' />
      <label className='text-sm font-medium opacity-40'>Улица</label>
      <input type='text' className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm' name='' />
      <label className='text-sm font-medium opacity-40'>Дом</label>
      <input type='text' className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm' name='' />

      <button type='submit' className='mt-7 block rounded-full bg-standartGreen px-4 py-1.5 text-white'>
        Сохранить изменения
      </button>

      <button type='button' className='mt-2.5 block rounded-full bg-standartGreen/30 px-4 py-1.5 text-standartGreen'>
        Изменить пароль
      </button>
    </form>
  );
};

export default Profile;
