import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Info(props) {
  let [state, setState] = useState({ status: false, color: "" });
  const returnUrl = (props) => {
    if (props.ready) {
      return `https://pokeapi.co/api/v2/pokemon-species/${props.id}/`;
    } else {
      return null;
    }
  };
  let url = returnUrl(props);

  useEffect(() => {
    try {
      axios.get(url).then((response) => {
        setState({ status: true, color: response.data.color.name });
      });
    } catch (error) {
      console.log(error);
    }
  }, [props, url]);

  if (state.status) {
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
