import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./PokemonOwned.css";

function PokemonOwned() {
  const history = useHistory();
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  useEffect(() => {
    const pokemons = JSON.parse(localStorage.getItem("pokemons"));
    setCapturedPokemons(pokemons);
  }, []);

  const releasePokemon = (e, nickname) => {
  e.stopPropagation();
    const filteredPokemons = capturedPokemons.filter(
      (poke) => poke.nickname !== nickname
    );
    localStorage.setItem("pokemons", JSON.stringify(filteredPokemons));
    setCapturedPokemons(filteredPokemons);
  };

  const goToPokemon = (pokemon) => {
    history.push(
      `/PokemonDetail/${pokemon.data.name}?nickname=${pokemon.nickname}`
    );
  };

  return (
    <div className='container'>
      <div className='parent flex border-dark'>
        <div className='row pokemon-owned row m-3 gy-1c'>
          <h2>
            Pokemon Owned
            <div className='underline'></div>
          </h2>

          {capturedPokemons &&
            capturedPokemons.map((pokemon) => (
              <div
                className='pokemon-square'
                onClick={() => goToPokemon(pokemon)}
              >
                <img src={pokemon.data.sprites.front_default} />

                <p className='pokemon-box col-4 pokemon-owned-box'>
                  <p>{pokemon.nickname}</p>
                  <p>{pokemon.data.name}</p>
                  <button onClick={(e) => releasePokemon(e, pokemon.nickname)}>
                    Release
                  </button>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonOwned;
