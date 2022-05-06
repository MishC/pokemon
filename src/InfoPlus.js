import React from "react";
import "./styles/InfoPlus.css";

export default function InfoPlus(props) {
  let newItem = "";
  let arrayItem = [];
  if (props.abilities) {
    return (
      <div className="InfoPlus bg-white w-80 pt-1 mt-0 mb-5 pb-5 border border-secondary">
        {/*This pokemon lives naturaly in {props.habitat}.*/}
        <h2 className=" text-left mt-5 mb-5 py-1">About</h2>
        <div className="container">
          <div className="row">
            {props.abilities.map((ability, index) => {
              //console.log(arrayItem);
              if (
                ability.language.name === "en" &&
                newItem.slice(0, 6).toLowerCase() !==
                  ability.flavor_text.slice(0, 6).toLowerCase() &&
                !arrayItem.includes(
                  ability.flavor_text.trim().slice(0, 6).toLowerCase()
                )
              ) {
                newItem = ability.flavor_text
                  .replace(/\f/g, "")
                  .replace(/\n/g, "");
                arrayItem.push(newItem.trim().slice(0, 6).toLowerCase());

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
