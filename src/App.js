import React from "react";
import { Routes, Route } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails";
import PokemonList from "./pages/PokemonList";
import Appbar from "./components/Appbar";
import { Box } from "@mui/system";

function App() {
  return (
    <Box sx={{ paddingTop: 10 }}>
      <Appbar />
      <Routes>
        <Route exact path="/" element={<PokemonList/>} />
        <Route path="/pokemon/:id" element={<PokemonDetails/>} />
      </Routes>
    </Box>
  )
}

export default App;