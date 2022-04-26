import React, { useState, useEffect } from "react";
import "./styles/Abilities.css";
import axios from "axios";
//import Explanation from "./Explanation";

export default function Abilities(props) {
  let [url, setUrl] = useState("");
  let [explain, setExplain] = useState([]);

  /*const hiddenContent = (Desc) => {
    Desc.className === "Desc_off"
      ? (Desc.className = "Desc_on")
      : (Desc.className = "Desc_off");
  };*/

  useEffect(() => {
    console.log(url);

    try {
      axios.get(url).then((result) => {
        //console.log(result.data.effect_entries);
        result.data.effect_entries.forEach((entry) => {
          if (entry.language.name === "en") {
            setExplain(entry.effect);
            console.log(explain);
          } else {
            return null;
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, [url, explain]);

  if (props.abilities) {
    return (
      <div className="Abilities bg-white  pt-5 w-80 m-0  border-top border-secondary">
        {/* <button class="btn info m-4 ">
            <h2>Moves</h2>
            
    </button>{" "}*/}

        <h2 className="mb-2 ">Abilities</h2>
        {props.abilities.map((ability, index) => {
          // let url = ability.ability.url;

          return (
            <div className="d-inline-flex mb-5 px-5 ">
              <p
                key={index}
                className="item p-4 mt-0 fs-5"
                onClick={() => {
                  setUrl(ability.ability.url);
                  //hiddenContent();
                }}
              >
                {`${ability.ability.name}      `}{" "}
              </p>
              <span key="Desc" className="Desc_off">
                {" "}
                {explain}{" "}
              </span>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
