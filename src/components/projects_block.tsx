import Project_item from "./project_item";
import { Icon } from "@iconify/react";

function Projects_block() {
  return (
    <div className="w-full h-96 p-3 bg-gradient-to-tr from-purple-900 to-purple-600 rounded-xl text-white font-semibold">
      <p className="text-xl font-black mb-4">Projects</p>

      <div className=" items w-full h-80 flex flex-col overflow-auto justify-items-center items-center gap-2">
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
      <div className="w-full bg-white text-black  mt-5 p-3 rounded-lg hover:bg-gray-200">
        <p className="flex justify-between">
          Add Project <Icon icon="ic:baseline-plus" width={25} />
        </p>
      </div>
    </div>
  );
}

export default Projects_block;
