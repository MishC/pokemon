import React, { useState, useEffect } from "react";
import "./styles/Abilities.css";
export default function ImagePokemon(props) {
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
              return <p key={index}>{ability.ability.name}</p>;
            })}
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
