import ReactPlayer from "react-player";
import { useAppSelector } from "../store";

export function Player() {
  const video = useAppSelector(state =>{
    const {currentModuleIndex, currentLessonIndex} =  state.player

    const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

    return currentLesson
  })
  return (
    <div className="flex-1  ">
      <div className="bg-zing-950 aspect-video w-full">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url={`https://www.youtube.com/watch?v=${video.id}`}
        />
      </div>
    </div>
  );
}
