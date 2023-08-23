import ReactPlayer from "react-player";

export function Player() {
  return (
    <div className="flex-1  ">
      <div className="bg-zing-950 aspect-video w-full">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url="https://www.youtube.com/watch?v=C0rJJceoO_0"
        />
      </div>
    </div>
  );
}
