import React from "react";
import "./styles/InfoPlus.css";

export default function InfoPlus(props) {
  let version = "";
  let newItem = "";

  if (props.abilities) {
    return (
      <div className="InfoPlus bg-white w-80 pt-1 mt-0 mb-5 pb-5 border border-secondary">
        {/*This pokemon lives naturaly in {props.habitat}.*/}
        <h2 className=" text-left mt-5 mb-5 py-1">About</h2>
        <div className="container">
          <div className="row">
            {props.abilities.map((ability, index) => {
              if (
                ability.language.name === "en" &&
                newItem !== ability.flavor_text
              ) {
                version = ability.version.url.split("").slice(-3, -1).join("");
                if ((version.charAt(0) === "/") | (parseInt(version) < 15)) {
                  newItem = ability.flavor_text;
                  console.log(version);
                } else {
                  return null;
                }

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
