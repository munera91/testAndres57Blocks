import {
  startLoadingPokemons,
  setPokemons,
  setFavoritesPoks,
} from "./pokemonSlice";

export const getPokemons = (page = 1) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemons());

    try {
      const limit = 20;
      const offset = (page - 1) * limit;

      const baseUrl = "https://pokeapi.co/api/v2/pokemon";
      const response = await fetch(
        `${baseUrl}?limit=${limit}&offset=${offset}`
      );
      const data = await response.json();

      dispatch(setPokemons({ pokemons: data.results, page }));
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  };
};

export const loadFavoritesFromStorage = () => (dispatch) => {
  try {
    const favPoks = JSON.parse(localStorage.getItem("favPoks"));
    if (favPoks !== null && favPoks.length > 0) {
      dispatch(setFavoritesPoks({ favorites: favPoks }));
    }
  } catch (error) {
    console.error("Error al cargar favoritos:", error);
  }
};
