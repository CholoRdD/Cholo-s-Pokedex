import React from "react";
import ShowCard from "./Components/ShowCard";
import PokemonList from "./Components/PokemonList";

function App() {
  return (
    <div className="flex flex-wrap items-center h-[100vh] inset-0 justify-center gap-10 p-10 bg-[rgb(255,28,28)]">
      <div className="bg-white w-full h-full overflow-y-auto flex flex-wrap justify-center items-center gap-4 rounded-2xl no-scrollbar p-4">
        {PokemonList.map((pokemon) => (
          <ShowCard
            key={pokemon.id}
            name={pokemon.name}
            type1={pokemon.type1}
            type2={pokemon.type2}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
