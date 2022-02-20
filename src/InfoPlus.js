import React from "react";
import "./InfoPlus.css";

export default function InfoPlus(props) {
  let newItem = 0;

  if (props.abilities) {
    return (
      <div className="InfoPlus text-left">
        <h2 className="mt-5 mb-4 ">{props.name}'s Abilities</h2>
        <ul>
          {props.abilities.map((ability, index) => {
            if (
              ability.language.name === "en" &&
              newItem !== ability.flavor_text
            ) {
              newItem = ability.flavor_text;
              return <li key={index}>{ability.flavor_text}</li>;
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
