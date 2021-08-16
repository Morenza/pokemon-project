import React from "react";
import "./PokemonBox.css";
import { Link } from "react-router-dom";

function PokemonBox(props) {
  const pokemonId = props.url.split("/pokemon/")[1].slice(0, -1);

  return (

    <Link className='pokemon-square' to={"/PokemonDetail/" + props.name}>

        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        />
      
      <p className='pokemon-box col-4'>
        <p>{props.name}</p>
      </p>
    </Link>
  );
}

export default PokemonBox;
