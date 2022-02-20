import React, { useState, useEffect } from "react";
import axios from "axios";
import ImagePokemon from "./ImagePokemon";

import InfoPlus from "./InfoPlus";
import "./Info.css";
export default function Info(props) {
  let [state, setState] = useState({
    status: false,
    color: "",
    genus: "",
    abilities: [],
    from: "",
    habitat: "",
  });

  const capitalizeFirst = (word) => {
    const word2 = word.charAt(0).toUpperCase() + word.slice(1);
    return word2;
  };
  const giveArticle = (word) => {
    if (word.charAt(0) === "a" || word.charAt(0) === "e") {
      return "an";
    } else {
      return "a";
    }
  };
  const name = capitalizeFirst(props.name);
  // console.log(name);
  const returnUrl = (props) => {
    if (props.ready) {
      return `https://pokeapi.co/api/v2/pokemon-species/${props.id}/`;
    } else {
      return null;
    }
  };
  let url = returnUrl(props);

  useEffect(() => {
    try {
      axios.get(url).then((response) => {
        setState({
          status: true,
          color: response.data.color.name,
          genus: response.data.genera[7].genus,
          abilities: response.data.flavor_text_entries,
          from: capitalizeFirst(response.data.evolves_from_species.name),
          habitat: `${giveArticle(response.data.habitat.name)} ${
            response.data.habitat.name
          }`,
        });

        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [props, url]);

  if (state.status) {
    return (
      <div className="Info ">
        <div className="d-inline-flex text-center border border-primary p-4">
          <ImagePokemon name={name} />
          <div className="d-block">
            <h2>{name}</h2>
            <div className="text-right">
              <p className="font-weight-bold">
                {} {state.genus}
              </p>
              <p>Evolves from: {state.from}</p>
              <p>Type: {props.type}</p>

              <p>Height: {props.height} cm</p>
              <p>Weiht: {props.weight} kg</p>
              <p>Color: {state.color}</p>
              <div />
            </div>
          </div>
        </div>
        <br />
        <div className="line-break"></div>
        <div className="text-left">
          <InfoPlus
            name={name}
            from={state.from}
            habitat={state.habitat}
            abilities={state.abilities}
            className="d-block"
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
