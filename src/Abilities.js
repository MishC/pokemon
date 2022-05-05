import React, { useState, useEffect } from "react";
import "./styles/Abilities.css";
import axios from "axios";
//import Explanation from "./Explanation";

export default function Abilities(props) {
  let [url, setUrl] = useState("");
  let [explain, setExplain] = useState([]);
  let [route, setRoute] = useState("");
  let [style, setStyle] = useState("item p-4 mt-0 fs-5");
  let [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.log(url);

    try {
      axios.get(url).then((result) => {
        //console.log(result.data.effect_entries);
        result.data.effect_entries.forEach((entry) => {
          if (entry.language.name === "en") {
            setExplain(entry.effect);
            setRoute("explain");
          } else {
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, [url, explain]);

  if (props.abilities) {
    return (
      <div className="Abilities bg-white px-5 py-5  border-top border-secondary">
        {/* <button className="btn info m-4 ">
            <h2>Moves</h2>
            
    </button>{" "}*/}

        <h2 className="mb-2 ml-5  pl-5 text-left">Abilities</h2>
        {props.abilities.map((ability, index) => {
          return (
            <div className="d-inline-flex mb-1 px-5 ">
              <p
                key={index}
                className={style}
                onClick={() => {
                  setUrl(ability.ability.url);
                  if (isClicked === false) {
                    setStyle("item p-4 mt-0 fs-5");
                    setIsClicked(true);
                  } else {
                    setStyle("item-0 p-4 mt-0 fs-5");
                    setIsClicked(false);
                  }
                }}
              >
                {`${ability.ability.name}      `}{" "}
              </p>
            </div>
          );
        })}
        <div className="fs-5">
          {route === "explain" ? <span>{explain}</span> : <div> {}</div>}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
