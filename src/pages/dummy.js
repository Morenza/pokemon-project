import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./PokemonOwned.css";

function PokemonOwned() {
  const history = useHistory();
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  useEffect(() => {
    const pokemons = JSON.parse(localStorage.getItem("pokemons"));
    setCapturedPokemons(pokemons);
  }, []);

  const releasePokemon = (nickname) => {
    const filteredPokemons = capturedPokemons.filter(
      (poke) => poke.nickname !== nickname
    );
    localStorage.setItem("pokemons", JSON.stringify(filteredPokemons));
    setCapturedPokemons(filteredPokemons);
  };

  const goToPokemon = (pokemon) => {
    history.push(`/PokemonDetail/${pokemon.data.name}?nickname=${pokemon.nickname}`);
  };

  return (
    <div className='container'>
      <div className='pokemon-owned d-flex border-dark'>
        <div className='row'>
          <h1 className='col-12'>Pokemon Owned</h1>

          {capturedPokemons && capturedPokemons.map((pokemon) => (
            <div>
              <span onClick={() => goToPokemon(pokemon)}>
                <img src={pokemon.data.sprites.front_default} />
                <h5>{pokemon.nickname}</h5>
                <h6>{pokemon.data.name}</h6>
              </span>
              <button onClick={() => releasePokemon(pokemon.nickname)}>Release</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonOwned;
