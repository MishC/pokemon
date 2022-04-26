import React, { useState, useEffect } from "react";
import axios from "axios";
import ImagePokemon from "./ImagePokemon";
import Abilities from "./Abilities";

import InfoPlus from "./InfoPlus";
import "./styles/Info.css";
export default function Info(props) {
  let [state, setState] = useState({
    status: false,
    color: "",
    genus: "",
    abilities: [],

    habitat: "",
  });
  let [evolve, setEvolve] = useState("");

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
        console.log(response);
        setState({
          status: true,
          color: response.data.color.name,
          genus: response.data.genera[7].genus,
          abilities: response.data.flavor_text_entries,
          habitat: `${giveArticle(response.data.habitat.name)} ${
            response.data.habitat.name
          }`,
        });
        if (response.data.evolves_from_species !== null) {
          setEvolve(
            "Evolves from:" +
              capitalizeFirst(response.data.evolves_from_species.name)
          );
        } else {
          setEvolve("");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [props, url]);

  if (state.status) {
    return (
      <div className="Info  ">
        <div className="d-md-inline-flex bg-white  py-5 px-5 info-api w-80 mt-5 mb-0 ">
          <h2>{name}</h2>

          <ImagePokemon name={name} />
          <div className="d-block text-left w-100 pt-4 mt-3 pr-5 mr-5">
            <br /> <br />
            <div className="fs-5">
              <p className="font-weight-bold">
                {} {state.genus}
              </p>
              <p> {evolve}</p>
              <p>Type: {props.type}</p>

              <p>Height: {props.height} cm</p>
              <p>Weiht: {props.weight} kg</p>
              <p>Color: {state.color}</p>
              <div />
            </div>
          </div>
        </div>
        <Abilities abilities={props.abilities} />
        <div className="text-center">
          <InfoPlus
            name={name}
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
