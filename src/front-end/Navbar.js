import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { ABOUT, CS, PORTFOLIO, PROGRAMMING } from "./page/pageReducer";
import * as styles from "./styles";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to={`/`}>
          <h1 style={styles.logo}>CHJ's Archive</h1>
        </Link>

        <ul className={"nav_ul"}>
          <li className={"nav-item"} style={styles.navListItem}>
            <Link to={`/${PORTFOLIO}/`} style={styles.navListItemLink}>
              Portfolio
            </Link>
          </li>
          <li className={"nav-item"} style={styles.navListItem}>
            <Link to={`/${CS}/`}>CS</Link>
          </li>
          <li className={"nav-item"} style={styles.navListItem}>
            <Link to={`/${PROGRAMMING}`} style={styles.navListItemLink}>
              Programming
            </Link>
          </li>
          <li className={"nav-item"} style={styles.navListItem}>
            <Link to={`/${ABOUT}`} style={styles.navListItemLink}>
              About
            </Link>
          </li>
        </ul>
        <Hamburger />
      </nav>
    );
  }
}

export default Navbar;
