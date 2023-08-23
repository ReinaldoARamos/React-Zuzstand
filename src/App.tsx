import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

import "./styles/global.css";

import { Video } from "./pages/Video";
export default function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <Video />
      </ReduxProvider>
    </div>
  );
}
