import { Video } from "lucide-react";


interface LessonProps {
  title: string,
  minutesAmount: string,
  onPlay: () => void
}
export function Lesson({minutesAmount, title, onPlay}: LessonProps) {

  

  return (
    <button className="flex  items-center justify-center gap-3 text-sm text-zinc-400" onClick={onPlay}>
      <Video className="h-4 w-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{minutesAmount}</span>
    </button>
  );
}
