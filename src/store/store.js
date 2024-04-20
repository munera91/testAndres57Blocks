import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemonSlice";
import { authSlice } from "./authSlice";


export const store = configureStore({
    reducer: {
        pokemons : pokemonSlice.reducer,
        authUser: authSlice.reducer,
    }
})