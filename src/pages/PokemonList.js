import React, { useState, useEffect } from "react";
import { useQuery } from "../hooks";
import Axios from "axios";
import GenerationData from "../components/GenerationData";
import PokemonBox from "../components/PokemonBox";
import './PokemonList.css'

function PokemonList() {
  const query = useQuery();
  const generationId = query.get("generationId");
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const generation = GenerationData.find((gen) => {
      return gen.id === generationId;
    });
    Axios.get(generation.generationAPI).then((response) => {
      setPokemonList(response.data.results);
    });
  }, []);

  return (
    <div>
      <div className='container overflow-hidden parent'>

        <div className='row m-3 gy-1c pokemon-grid'>
        <h2>Pokemon List
        <div className='underline'></div>
        </h2>
       
          {pokemonList.map((item, index) => (
            <PokemonBox key={index} name={item.name} url={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
