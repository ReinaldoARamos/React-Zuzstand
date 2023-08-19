import { FormEvent, useState } from "react";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  function handleNewSubmit(e : FormEvent) {
    e.preventDefault()
    console.log(newTodo)
  }
  return (
    <>
      <form action="" onSubmit={handleNewSubmit}>
        <input type="text" placeholder="insira um novo todos"  onChange={e => setNewTodo(e.target.value)}/>
        <button type="submit">Adicionar</button>
      </form>
    </>
  );
}
