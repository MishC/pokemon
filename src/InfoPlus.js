import React from "react";
import "./styles/InfoPlus.css";

export default function InfoPlus(props) {
  let newItem = 0;

  if (props.abilities) {
    return (
      <div className="InfoPlus bg-white w-80 pt-1 mt-0 mb-5 pb-5 border border-secondary">
        {/*This pokemon lives naturaly in {props.habitat}.*/}
        <h2 className=" text-left mt-5 mb-5 px-5 py-3">About</h2>
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
