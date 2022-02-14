import React, { useState } from "react";
import Info from "./Info";
import ImagePokemon from "./ImagePokemon";
import axios from "axios";

export default function SearchBar() {
  let [keyword, setKeyword] = useState(null);
  let [url, setUrl] = useState("");
  let [result, setResult] = useState({
    ready: false,
    name: " ",
    height: null,
    weight: null,
    type: " ",
    id: null,
  });

  function handleSearchWord(event) {
    event.preventDefault();
    setKeyword(event.target.value.toLowerCase());
  }

  const search = (event) => {
    event.preventDefault();
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${keyword}`;
    axios
      .get(apiUrl)

      .then((data) => {
        console.log(data);
        setResult({
          ready: true,
          name: data.forms[0].name,
          height: data.height * 10,
          weight: data.weight / 10,
          type: data.types[0].type.name,
          id: data.id,
        }).catch((error) => {
          console.log(error);
        });
        //console.log(result.weight);
        if (result.ready) {
          setUrl(
            `https://www.googleapis.com/customsearch/v1?cx=c45ec48da5a6f409f&key=AIzaSyA6hciKw_KeEYHT_WQRcda4I168vKNAM7U&q=${result.name}&searchType=image&imgSize=MEDIUM&imgColorType=color&num=1`
          );
        } else {
          setUrl(
            `https://www.googleapis.com/customsearch/v1?cx=c45ec48da5a6f409f&key=AIzaSyA6hciKw_KeEYHT_WQRcda4I168vKNAM7U&q=${keyword}&searchType=image&imgSize=MEDIUM&imgColorType=color&num=1`
          );
        }
      });
  };
  return (
    <div className="SearchBar pt-5">
      <form onSubmit={search} className="pb-5">
        <div className="inline">
          <input
            type="search"
            placeholder="Search pokemon"
            className="shadow-sm w-200"
            autoFocus="on"
            autoComplete="off"
            onChange={handleSearchWord}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary btn-rounded shadow-sm "
          />
        </div>
      </form>
      <ImagePokemon url={url} keyword={keyword} />
      <Info
        ready={result.ready}
        name={result.name}
        height={result.height}
        weight={result.weight}
        type={result.type}
        id={result.id}
      />
    </div>
  );
}
