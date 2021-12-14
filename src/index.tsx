import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const myContext = React.createContext({});

ReactDOM.render(
  <React.StrictMode>
    <myContext.Provider value={"hello"}>
      <App />
    </myContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
