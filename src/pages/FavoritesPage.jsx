import React from "react";
import { useSelector } from "react-redux";

export const FavoritesPage = () => {
  const { favorites } = useSelector((state) => state.pokemons);

  return (
    <div className="flex flex-col justify-center items-center w-[100vw]">

      <h1>Favorite pokemons</h1>

      <ul className="p-8 list-decimal">
        {favorites.map((pok,index) => (
          <li key={index} className="py-2">{pok}</li>
        ))}
      </ul>
    </div>
  );
};
