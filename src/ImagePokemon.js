import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/ImagePokemon.css";

export default function ImagePokemon(props) {
  let [pokemon, setPokemon] = useState({ image: "", ready: false });

  const haveProps = (name) => {
    if (name.length >= 2) {
      let url = `https://www.googleapis.com/customsearch/v1?cx=c45ec48da5a6f409f&key=AIzaSyA6hciKw_KeEYHT_WQRcda4I168vKNAM7U&q=${name}&searchType=image&imgColorType=color&num=1`;
      return url;
    } else {
      return null;
    }
  };
  let url = haveProps(props.name);
  useEffect(() => {
    if (props.name.length >= 2) {
      try {
        axios.get(url).then((response) => {
          setPokemon({ image: response.data.items[0].link, state: true });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [props.name, url]);

  if (pokemon.state === true) {
    return (
      <div className="ImagePokemon mt-4 p-2 d-block text-center">
        <br />
        <img
          src={pokemon.image}
          alt={props.name}
          className="img-fluid text-center align-middle"
        />
      </div>
    );
  } else {
    return <div className="ImagePokemon"></div>;
  }
}
