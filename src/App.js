import { Routes, Route } from "react-router-dom";
import { PokemonDetails, PokemonList } from "./pages";
import Appbar from "./components/Appbar";

function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route exact path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default App;
