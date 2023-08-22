import ReactPlayer from "react-player";
import { Header } from "../components/Header";
import { SideBar } from "../components/Aside";
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
          <SideBar />
        </main>
      </div>
    </div>
  );
}
