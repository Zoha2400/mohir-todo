import Link from "next/link";
import { Icon } from "@iconify/react";
import Search_input from "./search_input";
function Projects() {
  return (
    <div className="w-6/12 h-full flex flex-col gap-12 items-center bg-black">
      <header className="w-full flex justify-start">
        <div className="profile-button w-14 h-14 flex justify-center items-center hover:bg-blue-600 duration-150 rounded-full">
          <Link href={"/profile"}>
            <Icon icon="ic:baseline-account-circle" width={48} />
          </Link>
        </div>
      </header>

      <section className="w-3/4  min-h-fit flex flex-col gap-3">
        <p className=" text-4xl font-normal ">Hi Samantha</p>
        <p className="text-lg font-extralight text-gray-300 mb-2">
          Welcome back to the workspace, we missed You!
        </p>

        <Search_input />
      </section>
    </div>
  );
}

export default Projects;
