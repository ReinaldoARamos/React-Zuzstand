import { FormEvent, useState } from "react";
import { useDispatch } from 'react-redux'
import { add } from "../../store";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()
  function handleNewSubmit(e: FormEvent) {
    e.preventDefault()
    dispatch(add(newTodo))
  }
  return (
    <>
      <form action="" onSubmit={handleNewSubmit}>
        <input type="text" placeholder="insira um novo todos" onChange={e => setNewTodo(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>
    </>
  );
}
