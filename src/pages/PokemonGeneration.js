import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./PokemonGeneration.css";
import Generation from "../components/Generation";
import GenerationData from "../components/GenerationData";

function PokemonGeneration() {
  const [generations, setGenerations] = useState();

  useEffect(() => {
    setGenerations(GenerationData.map((item) => item.id));
  }, []);

  const pokemonsOwned = JSON.parse(localStorage.getItem('pokemons')) || [];

  return (
    <div className='container'>
      <div className='pokemon-list d-flex border-dark p-1'>
        <div className='row'>
          <div className='col-12'>
      
            <div className='pokemon-list__header'>Pokemon Generation</div>
            <div className='pokemon-list__rowContainer row'>
              {generations?.map((gen, idx) => (
                <Generation key={idx} id={idx + 1} />
              ))}
            </div>
          
          </div>
          {pokemonsOwned.length ? <p>{pokemonsOwned.length}  Pokemons owned! </p> : <p>No Pokemons owned </p>}
        </div>
        
      </div>
    </div>
  );
}
export default PokemonGeneration;
