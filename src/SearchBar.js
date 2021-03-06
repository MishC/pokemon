import React, { useState, useEffect } from "react";
import Info from "./Info";
import "./styles/SearchBar.css";
import axios from "axios";

export default function SearchBar() {
  let [keyword, setKeyword] = useState(null);
  let [result, setResult] = useState({
    ready: false,
    name: " ",
    height: null,
    weight: null,
    type: " ",
    id: null,
    abilities: [],
  });

  let [styleImg, setStyleImg] = useState({
    backgroundImage: " ",
    width: "100%",
    height: "300px",
    backgroundSize: "cover",
  });

  const randomizeNumber = (lengthOfArr) => {
    let num = Math.floor(Math.random() * (lengthOfArr - 1)) + 1;
    if (num < 10) {
      return "0" + num.toString();
    } else {
      return num.toString();
    }
  };

  const handleSearchWord = (event) => {
    event.preventDefault();
    setKeyword(event.target.value.toLowerCase());
  };

  const search = (event) => {
    event.preventDefault();
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${keyword}`;
    axios.get(apiUrl).then((result) => {
      setResult({
        ready: true,
        name: result.data.forms[0].name,
        height: result.data.height * 10,
        weight: result.data.weight / 10,
        type: result.data.types[0].type.name,
        id: result.data.id,
        abilities: result.data.abilities,
      });
      setStyleImg({
        backgroundImage: `url(${require("./images/" +
          randomizeNumber(19) +
          ".jpg")}
      )`,
      });
    });
  };

  useEffect(() => {
    setStyleImg({
      backgroundImage: `url(${require("./images/" +
        randomizeNumber(19) +
        ".jpg")}
      )`,
    });
  }, []);
  return (
    <div className="SearchBar">
      <div className="Search" style={styleImg}>
        <form onSubmit={search} className="submitForm pt-5">
          <div className="inline pt-5 text-center">
            {/*<img
            className="search-icon"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
            alt=" "
            type="submit"
          />*/}
            <input
              type="search"
              placeholder="Search pokemon"
              className="shadow-sm rounded"
              autoFocus="on"
              autoComplete="off"
              onChange={handleSearchWord}
            />
            <button
              type="submit"
              value="Search"
              className="btn btn-success btn-rounded shadow-sm "
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
        <br /> <br />
      </div>
      <div className="Content align-middle  text-center mb-1">
        <Info
          ready={result.ready}
          name={result.name}
          height={result.height}
          weight={result.weight}
          type={result.type}
          id={result.id}
          abilities={result.abilities}
        />
      </div>
      <br /> <br />
      <footer className="mastfoot mt-auto">
        <div className="inner bg-success text-white fs-6">
          <p>
            January 2022 , by{" "}
            <a
              href="https://twitter.com/"
              className="font-weight-bol text-white"
            >
              mishc
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
