function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-2 ">
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
      <div className="w-4/12 h-80 p-6  flex  rounded-3xl flex-col gap-7  bg-gradient-to-tr from-indigo-500 to-purple-800">
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
      </div>
    </div>
  );
}

export default page;
