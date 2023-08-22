import { ChevronDown, MessageCircle, Video } from "lucide-react";
import ReactPlayer from "react-player";
export function Player() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      {/*Header* */}
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Fundamentos do redux</h1>
            <span className="text-sm text-zinc-100">
              Módulo "Desvendando o redux"
            </span>
          </div>

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white ease-out hover:bg-violet-600">
            deixar feedback {<MessageCircle className="h-4 w-4" />}
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1  ">
            <div className="w-full bg-zing-950 aspect-video">
                <ReactPlayer 
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=C0rJJceoO_0"
                />
            </div>
          </div>
          <aside className="bg-zing-900  w-80 border-l border-zinc-800">
            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong>desvendando o redux</strong>
                  <span className="text-xs text-zinc-400"></span>
                </div>
                <ChevronDown className="ml-auto h-6 w-6 text-zinc-400" />
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex  items-center justify-center gap-3 text-sm text-zinc-400">
                  <Video className="h-4 w-4 text-zinc-500" />
                  <span>Fundamentod do redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
                <button className="flex  items-center justify-center gap-3 text-sm text-zinc-400">
                  <Video className="h-4 w-4 text-zinc-500" />
                  <span>Fundamentod do redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
                <button className="flex  items-center justify-center gap-3 text-sm text-zinc-400">
                  <Video className="h-4 w-4 text-zinc-500" />
                  <span>Fundamentod do redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
                <button className="flex  items-center justify-center gap-3 text-sm text-zinc-400">
                  <Video className="h-4 w-4 text-zinc-500" />
                  <span>Fundamentod do redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
