import React, { useState } from "react";
import axios from "axios";

export default function Info(props) {
  let [color, setColor] = useState(" ");

  if (props.ready) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${props.id}/`;

    axios
      .get(url)

      .then((data) => {
        setColor(data.color.name);
      })
      .catch((error) => {
        console.log(error);
      });
    return (
      <div className="Info">
        <h2>{props.name}</h2>
        <p>Type:{props.type}</p>
        <p>Height:{props.height} cm</p>
        <p>Weiht:{props.weight} kg</p>
        <p>Color: {color}</p>
      </div>
    );
  } else {
    return null;
  }
}
