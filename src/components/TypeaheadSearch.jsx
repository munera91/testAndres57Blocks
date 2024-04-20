import React, { useState } from "react";
import { useSelector } from "react-redux";

const TypeaheadSearch = ({ setFilteredPokemons }) => {
  const [inputValue, setInputValue] = useState("");
  const pokemons = useSelector((state) => state.pokemons.pokemons);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPokemons(filtered);
    } else {
      setFilteredPokemons([]);
    }
  };

  const handleClearSearch = () => {
    setInputValue("");
    setFilteredPokemons(pokemons);
  };

  return (
    <div className="py-8">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="p-2"
        placeholder="Search a Pokémon..."
      />
      {inputValue && <button onClick={handleClearSearch}>Clear</button>}
    </div>
  );
};

export default TypeaheadSearch;
