import { useState } from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import PokeCard from "./components/PokeCard";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  return (
    <>
      <Header />
      <SideNav
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={selectedPokemon}
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
}

export default App;
