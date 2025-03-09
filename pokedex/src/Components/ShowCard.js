import React from "react";

const typeColor = (typing) => {
  switch (typing) {
    case "Fire":
      return <span className="text-orange-900">{typing}</span>;
    case "Water":
      return <span className="text-blue-900">{typing}</span>;
    case "Grass":
      return <span className="text-green-900">{typing}</span>;
    case "Electric":
      return <span className="text-yellow-900">{typing}</span>;
    case "Poison":
      return <span className="text-purple-900">{typing}</span>;
    case "Flying":
      return <span className="text-indigo-900">{typing}</span>;
    case "Bug":
      return <span className="text-lime-900">{typing}</span>;
    case "Ground":
      return <span className="text-yellow-900">{typing}</span>;
    case "Psychic":
      return <span className="text-pink-900">{typing}</span>;
    case "Rock":
      return <span className="text-gray-900">{typing}</span>;
    case "Ice":
      return <span className="text-cyan-900">{typing}</span>;
    case "Dragon":
      return <span className="text-indigo-900">{typing}</span>;
    case "Dark":
      return <span className="text-gray-900">{typing}</span>;
    case "Steel":
      return <span className="text-gray-900">{typing}</span>;
    case "Fairy":
      return <span className="text-pink-900">{typing}</span>;
    case "Fighting":
      return <span className="text-red-900">{typing}</span>;
    case "Normal":
      return <span className="text-gray-900">{typing}</span>;
    default:
      return <span className="text-gray-900">{typing}</span>;
  }
};

export default function ShowCard({ name, type1, type2 }) {
  return (
    <div className="flex flex-row gap-4 font-bold">
      <div className="bg-black group hover:shadow-lg hover:shadow-blue-500 bg-opacity-15 h-52 w-48 rounded-2xl p-2 justify-center flex flex-col items-center transition-all duration-150 gap-2">
        <div className="w-full h-28 items-end flex justify-center">
          <img
            src={`https://projectpokemon.org/images/normal-sprite/${name.toLowerCase()}.gif`}
            className="w-max h-max bg-transparent rounded-xl"
          />
        </div>
        <p>{name}</p>
        <p>
          {typeColor(type1)} {type2 && <span> / {typeColor(type2)}</span>}
        </p>
      </div>
    </div>
  );
}
