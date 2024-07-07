import Link from "next/link";

function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-2 ">
      <Link
        href={"/"}
        className="absolute top-10 cursor-pointer hover:text-blue-600"
      >
        Вернуться на главную{" "}
      </Link>

      <div className="w-80 h-80 bg-white text-black rounded-3xl flex justify-center flex-col items-center gap-5">
        <div className="image w-28 h-28 rounded-full bg-gray-300"></div>
        <section className="flex justify-center flex-col items-center">
          <p className="font-bold">Zohir Mirzakhmedov</p>
          <p className="">08.11.2004 (19 лет)</p>
          <p>vasv29834@gmail.com</p>
        </section>
        <button className="bg-red-500 pr-4 pl-4 pt-2 pb-2 text-white rounded-xl font-bold">
          Log out
        </button>
      </div>
      <div className="w-4/12 h-80 p-6  flex relative overflow-hidden rounded-3xl flex-col gap-7  bg-gradient-to-tr from-indigo-500 to-purple-800">
        <p className="font-semibold text-lg">
          Краткая статистика пользователя:
        </p>

        <div className="stat text-sm font-light ml-4">
          <p>
            Всего заданий: <span className="font-bold">1325</span>
          </p>
          <p>
            Всего проектов: <span className="font-bold">15</span>
          </p>
          <p>
            Проектов закончено: <span className="font-bold">9</span>{" "}
          </p>
          <p>
            Заданий выполнено: <span className="font-bold">574</span>
          </p>
          <p>
            Дата регистрации: <span className="font-bold">15.12.2018</span>
          </p>
        </div>

        <div className="design absolute w-60 h-60 top-0 right-0">
          <div className="sun absolute w-20 z-50 h-20 -top-10 -right-10 bg-orange-100 rounded-full"></div>
          <div className="f1 absolute w-32 h-32 z-40 -top-16 -right-16 bg-orange-300 rounded-full"></div>
          <div className="f2 absolute w-40 h-40 z-30 -top-20 -right-20 bg-orange-400 rounded-full"></div>
          <div className="f3 absolute w-48 h-48 z-20 -top-24 -right-24 bg-purple-800 rounded-full"></div>
          <div className=" absolute w-64 h-64 z-10 -top-32 -right-32 bg-purple-700 rounded-full">
            <div className="orbitalball w-10 h-10 bg-white rounded-full absolute bottom-0 animation-spin transform translate-x-neg-50 shadow-inner-custom"></div>
          </div>
          <div className="oxygen1 absolute w-80 h-80 z-0 -top-40 -right-40 bg-purple-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default page;
