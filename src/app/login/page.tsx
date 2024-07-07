import Link from "next/link";

function login() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl font-light m-4">Войти</h1>

      <form action="" method="get" className="flex flex-col gap-3">
        <section className="*:border-none *:outline-none *:p-2 *:rounded-lg *:w-80">
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="text-black bg-gray-200"
          />
        </section>
        <section className="*:border-none *:outline-none *:p-2 *:rounded-lg *:w-80">
          <input
            type="password"
            name=""
            id=""
            placeholder="Пароль"
            className="text-black bg-gray-200"
          />
        </section>

        <button type="submit" className="w-80 bg-indigo-800 p-3 rounded-lg">
          Log in
        </button>
      </form>

      <Link className="m-5 underline text-blue-400" href="/reg">
        Нет аккаунта? Зарегистрируйте!
      </Link>
    </div>
  );
}

export default login;
