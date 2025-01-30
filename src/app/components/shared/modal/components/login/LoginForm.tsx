import { login } from "./actions";

const LoginForm = () => {
  return (
    <div>
      <h3>Вход</h3>
      <form className='flex w-full flex-col gap-y-2.5'>
        <input
          name='email'
          type='email'
          id='email'
          placeholder='Почта'
          required
          className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Пароль'
          required
          minLength={6}
          className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <button
          formAction={login}
          type='submit'
          className='mt-7 block rounded-md bg-standartGreen px-4 py-1.5 font-normal text-white'
        >
          Войти
        </button>
        <button
          // formAction={login}
          // type='submit'
          className='block rounded-md bg-standartGreen/30 px-4 py-1.5 font-normal text-standartGreen'
        >
          Забыли пароль?
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
