import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../store/slices/player";

export function Player() {

  const {currentLesson} = useCurrentLesson()
  const dispatch = useDispatch()

  function handlePlayNextVideo() {
    dispatch(next())
  }

  if(!currentLesson) {
    return null
  }
  return (
    <div className="flex-1  ">
      <div className="bg-zing-950 aspect-video w-full">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
          onEnded={handlePlayNextVideo}
        />
      </div>
    </div>
  );
}
