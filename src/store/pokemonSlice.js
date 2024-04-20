import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  pokemons: [],
  favorites: [],
  isLoading: false,
  pokemonsLoaded: false,
  curPokemon: null
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = [...state.pokemons, ...action.payload.pokemons];
      state.pokemonsLoaded = true;
    },
    addFavoritePok: (state, action) => {
      const newPokemon = action.payload.pokemon;
      const isPokemonInFavorites = state.favorites.includes(newPokemon);
      if (isPokemonInFavorites) {
        state.favorites = state.favorites.filter(
          (pokemon) => pokemon !== newPokemon
        );
      } else {
        state.favorites = [...state.favorites, newPokemon];
      }
    },
    setFavoritesPoks: (state, action) => {
      state.favorites = action.payload.favorites;
    },
    setCurPokemon: (state, action) => {
      let pokName = action.payload.pokName;
      let pokemon = state.pokemons.find(pok => pok.name === pokName);
      if(pokemon !== undefined){
        pokemon.image = `https://img.pokemondb.net/artwork/${pokName}.jpg`
        state.curPokemon = pokemon;
      }
    },
  },
});

export const {
  startLoadingPokemons,
  setPokemons,
  addFavoritePok,
  setFavoritesPoks,
  setCurPokemon
} = pokemonSlice.actions;
