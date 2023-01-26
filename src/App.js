import "./App.css";
import { PokemonContextProvider } from "./context/context";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <PokemonContextProvider>
      <Home />
    </PokemonContextProvider>
  );
}

export default App;
