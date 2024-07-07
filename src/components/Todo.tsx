import { Icon } from "@iconify/react/dist/iconify.js";

function Todo() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-10/12 flex cursor-pointer p-4 rounded-xl hover:bg-gray-100 duration-100">
        <p className="w-10/12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          vitae quis necessitatibus tempora in fugit ab, ullam suscipit ratione
          delectus similique error facere omnis ipsa architecto autem
          dignissimos inventore eius!
        </p>

        <div className="w-3/12 *:rounded-md *:text-black *:bg-gray-300 buttons *:w-8 flex justify-between *:flex *:justify-center *:items-center *:h-8">
          <button className="hover:bg-purple-500 hover:text-white">
            <Icon icon="ooui:recent-changes-ltr" />
          </button>

          <button className="hover:bg-green-500 hover:text-white">
            <Icon icon="ph:check-fat-fill" />
          </button>

          <button className="hover:bg-red-500 hover:text-white">
            <Icon icon="ph:trash-fill" />
          </button>
        </div>
      </div>
      <p className="w-2/12 flex justify-center text-sm font-light">15:45</p>
    </div>
  );
}

export default Todo;
