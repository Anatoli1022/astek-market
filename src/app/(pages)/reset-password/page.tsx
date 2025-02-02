"use client";
import { useActionState } from "react";

import { updatePassword } from "@/app/utils/actions";

const Page = () => {
  const [state, formAction, isPending] = useActionState(updatePassword, {
    error: "",
    success: "",
  });

  const { error, success } = state;

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4'>
      <form action={formAction} className='flex w-full max-w-96 flex-col gap-4'>
        <label className='w-full'>
          <span className='block text-sm font-medium opacity-40'>Пароль</span>

          <input
            name='password'
            type='password'
            className='mt-2 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
            required
          />
        </label>
        <label className='w-full'>
          <span className='block w-full text-sm font-medium opacity-40'>Повторите пароль</span>

          <input
            name='passwordTwo'
            type='password'
            className='mt-2 w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
            required
          />
        </label>
        <button
          type='submit'
          className='mt-7 block rounded-md bg-standartGreen px-4 py-1.5 font-normal text-white'
          disabled={isPending}
        >
          {isPending && <span></span>}
          Обновить пароль
        </button>

        {error && (
          <div role='alert' className='alert alert-error'>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div role='alert' className='alert alert-info'>
            <span>{success}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Page;
