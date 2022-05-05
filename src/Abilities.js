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

  if (props.ability) {
    return (
      <div>
        <p
          key={props.index}
          className={style}
          onClick={() => {
            setUrl(props.ability.url);
            if (isClicked === false) {
              setStyle("item-0 p-4 mt-0 fs-5");
              setIsClicked(true);
              setRoute("explain");
            } else {
              setStyle("item p-4 mt-0 fs-5");
              setIsClicked(false);
              setRoute("");
            }
          }}
        >
          {`${props.ability.name}      `}{" "}
        </p>
        <div className="fs-5">
          {route === "explain" ? <span>{explain}</span> : <div> {}</div>}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
