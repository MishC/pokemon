import React, { useState } from "react";

export default function ImagePokemon(props) {
  //const apikey = "AIzaSyA6hciKw_KeEYHT_WQRcda4I168vKNAM7U";
  let [pokemonImg, setPokemonImg] = useState("");

  const findImage = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPokemonImg(data.items[0].link);
        //console.log(pokemonImg);
      })
      .catch((error) => {
        console.log("stop!");
      });
  };
  if (props.url) {
    setTimeout(findImage(props.url), 50);
  } else {
    return null;
  }
  if (pokemonImg) {
    return (
      <div className="ImagePokemon">
        <img src={pokemonImg} alt={props.name} className="img-fluid" />
      </div>
    );
  } else {
    return <div className="ImagePokemon"></div>;
  }
}
