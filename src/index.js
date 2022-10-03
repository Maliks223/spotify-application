import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { StateProvider } from "./Utils/stateProvider";
// import reducer, { initialState } from "./Utils/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={reducer} > */}
      <App />
    {/* </StateProvider> */}
  </React.StrictMode>
);