import React from "react";
import "./styles/InfoPlus.css";

export default function InfoPlus(props) {
  let newItem = 0;

  if (props.abilities) {
    return (
      <div className="InfoPlus">
        {/*This pokemon lives naturaly in {props.habitat}.*/}
        <h2 className=" text-primary text-left mb-2 ">About</h2>
        <div className="text-center">
          {props.abilities.map((ability, index) => {
            if (
              ability.language.name === "en" &&
              newItem !== ability.flavor_text
            ) {
              newItem = ability.flavor_text;
              return (
                <div key={index} className="blur-box fs-5">
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
