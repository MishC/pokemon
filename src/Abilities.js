import React, { useState, useEffect } from "react";
import "./styles/Abilities.css";
import axios from "axios";
//import Explanation from "./Explanation";

export default function Abilities(props) {
  let [url, setUrl] = useState("");
  let [explain, setExplain] = useState([]);

  const hiddenContent = (Desc) => {
    Desc.className === "Desc_off"
      ? (Desc.className = "Desc_on")
      : (Desc.className = "Desc_off");
  };

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
  }, [url]);

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
              // let url = ability.ability.url;

              return (
                <div>
                  <p
                    key={index}
                    onClick={() => {
                      setUrl(ability.ability.url);
                      hiddenContent();
                    }}
                  >
                    {ability.ability.name}
                  </p>
                  <span key="Desc" className="Desc_off">
                    {" "}
                    {explain}{" "}
                  </span>
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
