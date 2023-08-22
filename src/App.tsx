import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

import  './styles/global.css'
import { Player } from "./pages/player";
export default function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <Player />
      </ReduxProvider>
    </div>
  );
}
