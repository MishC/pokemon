import React from "react";
import "./styles/InfoPlus.css";

export default function InfoPlus(props) {
  let newItem = 0;

  if (props.abilities) {
    return (
      <div className="InfoPlus text-center">
        {/*This pokemon lives naturaly in {props.habitat}.*/}
        <h2 className=" text-primary mt-5 mb-4 ">About</h2>
        <div>
          {props.abilities.map((ability, index) => {
            if (
              ability.language.name === "en" &&
              newItem !== ability.flavor_text
            ) {
              newItem = ability.flavor_text;
              return (
                <div key={index} className="blur-box">
                  {ability.flavor_text}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
