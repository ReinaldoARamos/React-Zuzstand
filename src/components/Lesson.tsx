import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string;
  minutesAmount: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export function Lesson({
  minutesAmount,
  title,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  console.log(isCurrent);
  return (
    <button
      className="flex  items-center justify-center gap-3 text-sm text-zinc-400 duration-150 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
      onClick={onPlay}
      disabled={isCurrent}
      data-active={isCurrent}
    >
      {isCurrent ? (
        <PlayCircle className="h-4 w-4 text-emerald-400 " />
      ) : (
        <Video className="h-4 w-4 text-zinc-500 " />
      )}
      <span>{title}</span>
      <span
        data-active={isCurrent}
        className="ml-auto font-mono text-xs text-zinc-500  data-[active=true]:text-emerald-400"
      >
        {minutesAmount}
      </span>
    </button>
  );
}
