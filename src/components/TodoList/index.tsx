//import { useSelector } from "react-redux";
import { useAppSelector } from "../../store";
export function Todo() {
  const todos = useAppSelector((store) => {
    return store.todo;
  });
  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}> {todo}</li>
      ))}
    </ul>
  );
}
