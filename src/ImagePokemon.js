import React, { useState } from "react";
import axios from "axios";

export default function ImagePokemon(props) {
  let [pokemonImg, setPokemonImg] = useState("");

  const findImage = (url) => {
    axios
      .get(url)
      .then((data) => {
        setPokemonImg(data.items[0].link);
      })
      .catch((error) => {
        console.log(error);
        return (
          <div>
            <h2>{error}</h2>
            <h5> Sorry, no image this time</h5>
          </div>
        );
      });
  };
  if (props.url) {
    findImage(props.url);
  }

  if (pokemonImg) {
    return (
      <div className="ImagePokemon">
        <img src={pokemonImg} alt={props.name} className="img-fluid" />
      </div>
    );
  } else {
    return null;
  }
}
