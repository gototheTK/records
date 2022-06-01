import React, { Component } from "react";
import { bar } from "./styles";

class Hamburger extends Component {
  render() {
    return (
      <div
        id={"hamburger"}
        className={"hamburger"}
        onClick={(e) => {
          const hamburger = e.target;
          const navMenu = document.querySelector("ul");
          const navLink = document.querySelectorAll(".nav-item");
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");

          navLink.forEach((n) => n.addEventListener("click", closeMenu));
          function closeMenu() {
            navMenu.classList.remove("active");
          }
        }}
      >
        <span
          className={"bar"}
          style={{
            width: "25px",
            backgroundColor: "black",
            height: "3px",
            margin: "2px",
            display: "block",
          }}
        ></span>
        <span
          className={"bar"}
          style={{
            width: "25px",
            backgroundColor: "black",
            height: "3px",
            margin: "2px",
            display: "block",
          }}
        ></span>
        <span
          className={"bar"}
          style={{
            width: "25px",
            backgroundColor: "black",
            height: "3px",
            margin: "2px",
            display: "block",
          }}
        ></span>
        <span
          className={"bar"}
          style={{
            width: "25px",
            backgroundColor: "black",
            height: "3px",
            margin: "2px",
            display: "block",
          }}
        ></span>
      </div>
    );
  }
}

export default Hamburger;
