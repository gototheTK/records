import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { createStore } from "redux";
import MainContainer from "./front-end/MainContainer";
const rootReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.message];
    default:
      return state;
  }
};
const store = createStore(rootReducer);
function App() {
  return (
    <React.StrictMode>
      <MainContainer />
    </React.StrictMode>
  );
}

export default App;
