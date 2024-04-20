import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, loadFavoritesFromStorage } from "../store/thunks";
import TypeaheadSearch from "../components/TypeaheadSearch";
import { Link } from "react-router-dom";
import { addFavoritePok } from "../store/pokemonSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, favorites, page, pokemonsLoaded } = useSelector(
    (state) => state.pokemons
  );
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    console.log("pokemonsLoaded", pokemonsLoaded);
    if (!pokemonsLoaded) {
      dispatch(getPokemons());
      dispatch(loadFavoritesFromStorage());
    }
  }, [dispatch]);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favPoks", JSON.stringify(favorites));
    }
  }, [favorites]);

  const handleNextPage = () => {
    dispatch(getPokemons(page + 1));
  };

  const setFavorite = (pokName) => {
    dispatch(addFavoritePok({ pokemon: pokName }));
  };

  return (
    <div className="flex flex-col justify-center items-center w-[100vw]">
      <h1>Pokemons Home</h1>
      <TypeaheadSearch setFilteredPokemons={setFilteredPokemons} />
      <div className="grid md:grid-cols-5 grid-cols-4 gap-4 m-8">
        {(filteredPokemons.length > 0 ? filteredPokemons : pokemons).map(
          ({ name }) => (
            <div className="border border-1 p-3" key={name}>
              <div className="flex w-40 items-center relative">
                {name}
                <button
                  className="mx-2 p-0 absolute right-2"
                  onClick={() => setFavorite(name)}
                >
                  <svg
                    className={`h-8 w-8 ${
                      favorites.includes(name)
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                  </svg>
                </button>
              </div>
              <Link to={`/pok-detail/${name}`}>Details</Link>
            </div>
          )
        )}
      </div>
      <button disabled={isLoading} onClick={handleNextPage}>
        Get more pokemons
      </button>
    </div>
  );
};

export default HomePage;
