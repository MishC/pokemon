import React from "react";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.css";

function App() {
  return (
    <div className="App m-0 p-0 bg-success">
      <div className="container bg-success">
        <div className="row p-0 m-0">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <SearchBar />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
