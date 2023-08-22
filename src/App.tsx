import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { Player } from "./pages/player";
import  './styles/global.css'
export default function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <Player />
      </ReduxProvider>
    </div>
  );
}
