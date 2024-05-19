import { Outlet } from "react-router-dom";
import {DeckProvider} from "./contexts/DeckContext";
import "./App.css";

function App() {
  return (
    <DeckProvider>
      <Outlet />
    </DeckProvider>
);
}

export default App;
