import ReactPlayer from "react-player";
import { Loader } from "lucide-react";
import { next, useCurrentLesson } from "../store/slices/player";
import { useAppDispatch, useAppSelector } from "../store";

export function Player() {
  const { currentLesson } = useCurrentLesson();
  const dispatch = useAppDispatch();
  const isCouseLoading = useAppSelector((state) => state.player.isLoading);
  console.log("loading?:" + isCouseLoading);
  function handlePlayNextVideo() {
    dispatch(next());
  }

  if (!currentLesson) {
    return null;
  }
  return (
    <div className="flex-1  ">
      <div className="bg-zing-950 aspect-video w-full">
     
{isCouseLoading ? (
  <div className="flex h-full items-center justify-center">
    <Loader className="h-5 w-5 animate-spin text-zinc-400" />
  </div>
) : (
  <ReactPlayer
    width="100%"
    height="100%"
    controls
    playing
    url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
    onEnded={handlePlayNextVideo}
  />
)}
      </div>
    </div>
  );
}

/**/