import React from "react";
import "./styles/InfoPlus.css";

export default function InfoPlus(props) {
  let newItem = 0;

  if (props.abilities) {
    return (
      <div className="InfoPlus bg-white w-80 pt-5 mt-5 mb-5 pb-5 rounded">
        {/*This pokemon lives naturaly in {props.habitat}.*/}
        <h2 className=" text-primary text-left mb-5">About</h2>
        <div class="container">
          <div class="row">
            {props.abilities.map((ability, index) => {
              if (
                ability.language.name === "en" &&
                newItem !== ability.flavor_text
              ) {
                newItem = ability.flavor_text;
                return (
                  <div
                    key={index}
                    className="col-lg-5 blur-box fs-5 ml-3 text-center"
                  >
                    {ability.flavor_text}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
