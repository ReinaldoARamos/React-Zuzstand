import { MessageCircle } from "lucide-react";

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
          <div className="flex-1  ">video</div>
          <aside className="bg-zing-900 h-[600px] w-80 border-l border-zinc-800">
            dados
          </aside>
        </main>
      </div>
    </div>
  );
}
