import { login } from "./actions";

const LoginForm = () => {
  return (
    <div>
      <h3 className='text-xl text-lightGray'>Добро пожаловать на сайт компании Astek</h3>
      <p className='mt-2.5 text-xs text-lightGray'>Личный кабинет понадобиться для оформления и отслеживания заказа</p>
      <form className='mt-8 flex w-full flex-col'>
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
          formAction={login}
          type='submit'
          className='mt-7 block rounded-md bg-standartGreen px-4 py-1.5 text-sm font-normal text-white'
        >
          Войти
        </button>
        <button
          // formAction={login}
          // type='submit'
          className='mt-2.5 block rounded-md bg-standartGreen/30 px-4 py-1.5 text-sm font-normal text-standartGreen'
        >
          Забыли пароль?
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
