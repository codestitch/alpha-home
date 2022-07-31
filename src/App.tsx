import React from "react";
import ReactDOM from "react-dom";

import Toolbar from "alpha_navigation/Toolbar";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: alpha-home</div>
    <Toolbar title="Home"/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
