import { useState } from "react";
import PresentationPokedex from "./component/presentationPokedex/PresentationPokedex";
import PokemonStarters from "./component/pokemonStarters/PokemonStarters";
import PokemonList from "./component/pokemonList/PokemonList";

function App() {
  return (
    <>
      <PresentationPokedex />
      <PokemonStarters />
      <PokemonList />
    </>
  );
}

export default App;
