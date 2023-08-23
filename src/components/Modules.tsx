import { ChevronDown, Video } from "lucide-react";
import { Lesson } from "./Lesson";

export function Modules() {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm">
          1
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong>desvendando o redux</strong>
          <span className="text-xs text-zinc-400"></span>
        </div>
        <ChevronDown className="ml-auto h-6 w-6 text-zinc-400" />
      </button>
      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson />
        <Lesson />
        <Lesson />
      </nav>
    </div>
  );
}
