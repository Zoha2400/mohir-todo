import Link from "next/link";

function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl font-light m-4">Регистрация</h1>

      <form action="" method="get" className="flex flex-col gap-3">
        <section className="*:border-none *:outline-none *:p-2 *:rounded-lg *:w-80">
          <input
            type="text"
            name=""
            id=""
            placeholder="Имя"
            className="text-black bg-gray-200"
          />
        </section>
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
            type="date"
            name=""
            id=""
            placeholder="Возраст"
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
          Register
        </button>
      </form>

      <Link className="m-5 underline text-blue-400" href="/login">
        Войти в существующий аккаунт.
      </Link>
    </div>
  );
}

export default page;
