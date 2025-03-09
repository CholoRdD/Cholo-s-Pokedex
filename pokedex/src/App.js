import React from "react";
import ShowCard from "./Components/ShowCard";
import PokemonList from "./Components/PokemonList";

function App() {
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center gap-2 p-8 bg-[rgb(255,28,28)]">
      <p className="text-3xl text-white font-bold">
        THIS PROJECT IS STILL A WORK IN PROGRESS
      </p>
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
