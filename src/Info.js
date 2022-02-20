import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Info.css";
export default function Info(props) {
  let [state, setState] = useState({ status: false, color: "" });

  const capitalizeFirst = (word) => {
    const word2 = word.charAt(0).toUpperCase() + word.slice(1);
    return word2;
  };
  const name = capitalizeFirst(props.name);
  // console.log(name);
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
        setState({
          status: true,
          color: response.data.color.name,
          genus: response.data.genera[7].genus,
        });
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [props, url]);

  if (state.status) {
    return (
      <div className="Info">
        <h2>{name}</h2>
        <div className="text-right">
          <p className="font-weight-bold">
            {} {state.genus}
          </p>
          <p>Type: {props.type}</p>

          <p>Height: {props.height} cm</p>
          <p>Weiht: {props.weight} kg</p>
          <p>Color: {state.color}</p>
        </div>
        <div className="text-left"></div>
      </div>
    );
  } else {
    return null;
  }
}
