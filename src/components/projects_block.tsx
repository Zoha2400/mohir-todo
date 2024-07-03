import Project_item from "./project_item";

function Projects_block() {
  return (
    <div className="w-full h-auto p-3 bg-gradient-to-tr from-purple-900 to-purple-600 rounded-xl text-white font-semibold">
      <p className="text-xl font-black">Projects</p>

      <div className=" items w-full h-auto grid grid-cols-3 grid-rows-3  justify-items-center items-center">
        <Project_item />
        <Project_item />
        <Project_item />
        <Project_item />
        <Project_item />
        <Project_item />
        <Project_item />
        <Project_item />
        <Project_item />
      </div>
    </div>
  );
}

export default Projects_block;
