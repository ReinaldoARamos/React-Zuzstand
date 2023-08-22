import { MessageCircle } from "lucide-react";

export function Header() {
    return (
     
        <div className="flex items-center justify-between">
       <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Fundamentos do redux</h1>
            <span className="text-sm text-zinc-100">
              Módulo "Desvendando o redux"
            </span>
          </div>

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white ease-out hover:bg-violet-600">
            deixar feedback {<MessageCircle className="h-4 w-4" />}
          </button></div>
    )
}