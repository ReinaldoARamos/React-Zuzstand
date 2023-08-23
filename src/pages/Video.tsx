import ReactPlayer from "react-player";
import { Header } from "../components/Header";
import { Modules } from "../components/Modules";
export function Video() {
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
            <Modules title="Desvendando o Redux"  lessonsAmount={3} moduleIndex={0}/>
            <Modules title="Fundamentos do Redux"  lessonsAmount={3} moduleIndex={1}/>
            <Modules title="Criando a UI do app"  lessonsAmount={3} moduleIndex={2}/>
          </aside>
        </main>
      </div>
    </div>
  );
}
