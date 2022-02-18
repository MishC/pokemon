import React, { useState } from "react";
import axios from "axios";

export default function Info(props) {
  let [state, setState] = useState({ color: "", ability: "" });

  if (props.ready) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${props.id}/`;

    axios
      .get(url)
      .then((response) => {
        setState({ color: response.data.color.name });
      })
      .catch((error) => {
        console.log(error);
      });
    return (
      <div className="Info mb-5">
        <h2>{props.name}</h2>
        <p>Type: {props.type}</p>
        <p>Height: {props.height} cm</p>
        <p>Weiht: {props.weight} kg</p>
        <p>Color: {state.color}</p>
      </div>
    );
  } else {
    return null;
  }
}
