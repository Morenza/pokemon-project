import React from "react";
import "./Generation.css";
import { Link } from "react-router-dom";

function Generation(props) {
  return (
    <div className='col-4 justify-content-center align-items-center'>
      <Link to={"/PokemonList?generationId=" + props.id}>
        <button className='generation border-dark'>
          <h1 style={{ margin: "0.3rem" }}>{props.id}</h1>
        </button>
      </Link>
    </div>
  );
}

export default Generation;
