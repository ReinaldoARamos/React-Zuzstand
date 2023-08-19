import AddTodo from "./components/AddTodo";
import { Todo } from "./components/TodoList";
import {Provider as ReduxProvider} from 'react-redux'
import { store } from "./store";
export default function App() {
 
  return (
      <div>
        <ReduxProvider store={store}>
       <Todo />
       <AddTodo />
       </ReduxProvider>
      </div>
  )
}

