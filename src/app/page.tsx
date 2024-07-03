import Projects from "@/components/projects";
import Todos from "@/components/todos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen bg-stone-950 flex gap-5 p-5 *:box-border *:p-3">
      <Projects />
      <Todos />
    </main>
  );
}
