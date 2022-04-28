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
            "From:" + capitalizeFirst(response.data.evolves_from_species.name)
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
      <div className="Info mt-5 p-0">
        <div className="container bg-white p-5">
          <div className="row align-items-start">
            <h2 className="col-sm-3 text-left mt-1 align-self-start">{name}</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-2"></div>

            <div className="col-sm-4">
              <ImagePokemon name={name} />
            </div>
            <div className="col-sm-4 align-self-left text-left mt-0 pt-2 ">
              <br /> <br />
              <div className="fs-5 text-left">
                <p className=" fs-4 font-weight-bold pl-5 text-success ">
                  {} {state.genus}
                </p>
                <p> {evolve}</p>
                <p>Type: {props.type}</p>

                <p>Height: {props.height} cm</p>
                <p>Weiht: {props.weight} kg</p>
                <p>Color: {state.color}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Abilities abilities={props.abilities} />
        </div>
        <div className="text-center">
          <InfoPlus
            name={name}
            habitat={state.habitat}
            abilities={state.abilities}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
