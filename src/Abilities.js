import React, { useState, useEffect } from "react";
import "./styles/Abilities.css";
import axios from "axios";

export default function ImagePokemon(props) {
  let [url, setUrl] = useState("");

  const explain = (url) => {
    axios.get(url).then((result) => {
      console.log(result.data);
    });
  };

  if (props.abilities) {
    return (
      <div className="Abilities">
        <div className="d-sm-inline-flex justify-content-between">
          {/* <button class="btn info m-4 ">
            <h2>Moves</h2>
            
    </button>{" "}*/}
          <button class="btn info m-4">
            <h2>Abilities</h2>
            <br />
            {props.abilities.map((ability, index) => {
              let url = ability.ability.url;

              return (
                <div>
                  <p key={index}>{ability.ability.name} </p>
                </div>
              );
            })}
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
