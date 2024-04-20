import { setCurPokemon,setPokemons } from '../pokemonSlice';

describe('Prueba pokemon slice reducers', () => {
  it('Deberia setear el currentPokemon', () => {
    const initialState = {
      pokemons: [{ name: 'Pikachu' }, { name: 'Bulbasaur' }],
      curPokemon: null,
    };

    const action = {
      type: setCurPokemon.type,
      payload: {
        pokName: 'Pikachu',
      },
    };

    const nextState = pokemonReducer(initialState, action);

    expect(nextState.curPokemon).toEqual({
      name: 'Pikachu',
      image: 'https://img.pokemondb.net/artwork/Pikachu.jpg',
    });
  });

  it('No deberia setear el current Pokemon si no lo encuentra', () => {
    const initialState = {
      pokemons: [{ name: 'Pikachu' }, { name: 'Bulbasaur' }],
      curPokemon: null,
    };

    const action = {
      type: setCurPokemon.type,
      payload: {
        pokName: 'Charmander',
      },
    };

    const nextState = pokemonReducer(initialState, action);

    expect(nextState.curPokemon).toBe(null);
  });
});


describe('Prueba para setear los pokemons', () => {
  it('Deberia setear los pokemons', () => {
    const initialState = {
      page: 0,
      pokemons: [],
      isLoading: false,
      pokemonsLoaded: false,
    };

    const action = {
      type: setPokemons.type,
      payload: {
        page: 1,
        pokemons: [{ name: 'Pikachu' }],
      },
    };

    const nextState = pokemonReducer(initialState, action);

    expect(nextState.isLoading).toBe(false);
    expect(nextState.page).toBe(1);
    expect(nextState.pokemons).toEqual([{ name: 'Pikachu' }]);
    expect(nextState.pokemonsLoaded).toBe(true);
  });
});

