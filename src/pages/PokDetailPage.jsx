import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurPokemon } from "../store/pokemonSlice";
import { useNavigate, useParams } from "react-router-dom";

export const PokDetailPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { curPokemon } = useSelector((state) => state.pokemons);

  useEffect(() => {
    console.log("curPok", curPokemon);
    dispatch(setCurPokemon({ pokName: name }));
  }, []);

  if (curPokemon !== null) {
    return (
      <div className="flex flex-col justify-center items-center w-[100vw]">
        <h1>Pokemon Detail</h1>

        <div className="flex flex-col text-center mt-8 gap-8">
          <h1 className="underline">{curPokemon.name}</h1>
          <img src={curPokemon.image} alt="" />
        </div>

        <button onClick={() => navigate("/home")}>Regresar</button>
      </div>
    );
  }
};
