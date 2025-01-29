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
          className='rounded-lg bg-black/10 px-2.5 py-1.5 text-sm'
        />
        <button formAction={login} type='submit'>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

// import { login, signup } from "./actions";

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor='email'>Email:</label>
//       <input id='email' name='email' type='email' required />
//       <label htmlFor='password'>Password:</label>
//       <input id='password' name='password' type='password' required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>Sign up</button>
//     </form>
//   );
// }
