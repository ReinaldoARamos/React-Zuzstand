import ReactPlayer from "react-player";
import { Header } from "../components/Header";
import { Modules } from "../components/Modules";
import { useAppSelector } from "../store";
export function Video() {
  const modules = useAppSelector((state) => state.player.course.modules);
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      {/*Header* */}
      <div className="flex w-[1100px] flex-col gap-6">
        <Header />

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 pr-80 shadow">
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
          <aside className=" bg-zing-900 absolute bottom-0  right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-700">
            {modules.map((module, index) => {
              return (
                <Modules
                  title={module.title}
                  lessonsAmount={module.lessons.length}
                  moduleIndex={index}
                />
              );
            })}
          </aside>
        </main>
      </div>
    </div>
  );
}
