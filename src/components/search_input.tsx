import { Icon } from "@iconify/react";

function Search_input() {
  return (
    <div className="w-full h-16 bg-zinc-600 rounded-xl flex  items-center">
      <Icon icon="ic:round-search" className="m-4" width={48} />
      <input
        type="text"
        className="w-full h-16 bg-transparent outline-none border-none p-3 font-medium text-lg text-white "
        placeholder="Search Task or Project"
      />
    </div>
  );
}

export default Search_input;
