"use client";
import { useActionState } from "react";

import { sendResetPasswordEmail } from "@/app/utils/actions";

const Page = () => {
  const [state, formAction, isPending] = useActionState(sendResetPasswordEmail, {
    error: "",
    success: "",
  });

  const { error, success } = state;

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4'>
      <form action={formAction} className='flex w-full max-w-96 flex-col gap-2'>
        <label className='w-full'>
          <span className='block text-sm font-medium opacity-40'>Почта</span>
          <input type='email' name='email' className='w-full rounded-lg bg-black/10 px-2.5 py-1.5 text-sm' required />
        </label>

        <button
          className='mt-7 block rounded-md bg-standartGreen px-4 py-1.5 font-normal text-white'
          type='submit'
          disabled={isPending}
        >
          {isPending && <span></span>}
          Сбросить пароль
        </button>

        {error && (
          <div role='alert'>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div role='alert'>
            <span>{success}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Page;
