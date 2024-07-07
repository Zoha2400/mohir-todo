function Project_item() {
  return (
    <div className="w-full h-auto flex gap-2 items-center hover:bg-purple-500">
      <div className="w-14 h-14 bg-white text-black font-bold text-xl flex justify-center items-center">
        MT
      </div>
      <div className="flex w-full p-2 justify-between items-center">
        <p className="font-light text-xl">Math Project</p>
        <p>17-08-2015</p>
      </div>
    </div>
  );
}

export default Project_item;
