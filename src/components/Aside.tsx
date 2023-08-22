import { ChevronDown, Video } from "lucide-react";

export function SideBar() {
    return (
        <aside className=" divide-y-2 divide-zinc-900 bg-zing-900  absolute bottom-0 right-0 top-0 w-80 overflow-y-scroll border-l border-zinc-800 scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-700">
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
    )
}