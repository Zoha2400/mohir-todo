import { Icon } from "@iconify/react";

function Todos() {
  return (
    <div className="w-6/12 bg-white text-black rounded-lg h-full flex justify-center items-center">
      <section className="w-3/4 h-4/5 ">
        <header className="flex justify-between">
          <div>
            <p className="text-xl font-semibold">Math Tasks</p>
            <p className="text-gray-500 font-medium">We should learn math</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-gray-500 font-medium">Add Members</p>
            <button className="users w-14 h-14 flex justify-center items-center hover:bg-purple-600 hover:text-white duration-100 bg-slate-200 rounded-lg">
              <Icon icon="ic:baseline-plus" width={25} />
            </button>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Todos;
