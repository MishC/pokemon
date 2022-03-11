import React from "react";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.css";

function App() {
  return (
    <div className="App m-0 p-0 bg-secondary">
      <div class="container bg-secondary">
        <div class="row p-0 m-0">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <SearchBar />
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
