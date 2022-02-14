import React, { useState } from "react";

export default function Info(props) {
  //let [url, setUrl] = useState(" ");
  let [color, setColor] = useState(" ");

  if (props.ready) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${props.id}/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setColor(data.color.name);
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
