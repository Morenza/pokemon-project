import React, { useState, useEffect } from "react";
import { useQuery } from "../hooks";
import Axios from "axios";
import "./PokemonDetail.css";

function PokemonDetail(props) {
  const query = useQuery();
  const nickname = query.get("nickname");

  const [individualPokemonData, setIndividualPokemonData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const pokemonName = props.match.params.name;
      Axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .then((response) => {
          setIndividualPokemonData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const capturePokemon = () => {
    const value = Math.random();
    if (value > 0.5) {
      const nickname = prompt("Please give it a nickname.");
      let capturedPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
      const pokemonExists = capturedPokemons.some(
        (pokemon) => pokemon.nickname === nickname.trim()
      );
      if (pokemonExists) {
        alert("That nickname already exist!");
      } else if (nickname.trim().length < 1) {
        alert("Please enter a nickname.");
      } else {
        capturedPokemons = [
          ...capturedPokemons,
          { nickname, data: individualPokemonData },
        ];
        localStorage.setItem("pokemons", JSON.stringify(capturedPokemons));
      }
    } else {
      alert("Capture failed.");
    }
  };

  const releasePokemon = (nickname) => {
    const capturedPokemons = JSON.parse(localStorage.getItem("pokemons"));
    const filteredPokemons = capturedPokemons.filter(
      (poke) => poke.nickname !== nickname
    );
    localStorage.setItem("pokemons", JSON.stringify(filteredPokemons));
    props.history.push("/PokemonOwned");
  };

  return (
    <div className='pokemon-detail'>
      {individualPokemonData ? (
        <div className='detail-child'>
          <h2>{individualPokemonData.name}</h2>
          <img src={individualPokemonData.sprites.front_default} />
          {nickname ? (
            <div className='nickname'>
              <p> {nickname} </p>
              <button onClick={() => releasePokemon(nickname)}>Release</button>
            </div>
          ) : (
            <button onClick={capturePokemon}>Capture</button>
          )}
          <div className='types'>
            <h1>Types</h1>
            {individualPokemonData.types.length ? (
              <div className='types-children'>
                {individualPokemonData.types.map((item, index) => (
                  <div key={index}>{item.type.name}</div>
                ))}
              </div>
            ) : (
              <p> No types</p>
            )}
          </div>
          <h1>Moves</h1>
          <div className='moves'>
            {individualPokemonData.moves.length ? (
              individualPokemonData.moves.map((item, index) => (
                <div key={index}>{item.move.name}</div>
              ))
            ) : (
              <p> No moves</p>
            )}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default PokemonDetail;

// useEffect(() => {
//     Axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName).then(
//       (response) => {
//         setIndividualPokemonData(response.data);
//       }
//     );
//   }, []);
