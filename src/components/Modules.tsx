import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsable from '@radix-ui/react-collapsible'
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { play } from "../store/slices/player";
interface ModuleProps {
  title: string;
  lessonsAmount: number;
  moduleIndex: number;
}

export function Modules({ title, lessonsAmount, moduleIndex }: ModuleProps) {
  const lessons = useAppSelector((state) => state.player.course.modules[moduleIndex].lessons)
  const dispatch = useDispatch()
  return (
    <Collapsable.Root className="group">

      <Collapsable.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong>{title}</strong>
          <span className="text-xs text-zinc-400">{lessonsAmount} aulas</span>
        </div>
        <ChevronDown className="ml-auto h-6 w-6 text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsable.Trigger>
      <Collapsable.Content>
        <nav className="relative flex flex-col gap-4 p-6 transition">
          {lessons.map((lesson, lessonIndex) => {
            return (
              <Lesson minutesAmount={lesson.duration} title={lesson.title} onPlay={() => dispatch(play([moduleIndex, lessonIndex]))} />
            )
          })}
        </nav>
      </Collapsable.Content>
    </Collapsable.Root>
  );
}
