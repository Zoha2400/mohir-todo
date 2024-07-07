import { Icon } from "@iconify/react";
import Todo from "./Todo";

function Todos() {
  return (
    <div className="w-6/12 bg-white text-black rounded-lg h-full flex justify-center items-center flex-col overflow-auto pb-4">
      <section className="w-3/4 h-4/5 flex flex-col gap-10 ">
        <header className="flex justify-between">
          <div>
            <p className="text-xl font-semibold">Math Tasks</p>
            <p className="text-gray-500 font-medium">We should learn math</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-gray-500 font-medium">Add a task</p>
            <button className="users w-14 h-14 flex justify-center items-center hover:bg-purple-600 hover:text-white duration-100 bg-slate-200 rounded-lg">
              <Icon icon="ic:baseline-plus" width={25} />
            </button>
          </div>
        </header>

        <section className="w-full h-auto bg-white flex flex-col gap-1 pb-5">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </section>
      </section>
    </div>
  );
}

export default Todos;
