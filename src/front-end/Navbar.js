import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ABOUT, CS, PORTFOLIO, PROGRAMMING } from "./page/pageReducer";
import * as styles from "./styles";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to={`/records-archive/${PORTFOLIO}`}>
          <h1 style={styles.logo}>CHJ's Archive</h1>
        </Link>
        <ul>
          <li style={styles.navListItem}>
            <Link
              to={`/records-archive/${PORTFOLIO}`}
              style={styles.navListItemLink}
            >
              Portfolio
            </Link>
          </li>
          <li style={styles.navListItem}>
            <Link to={`/records-archive/${CS}`}>CS</Link>
          </li>
          <li style={styles.navListItem}>
            <Link
              to={`/records-archive/${PROGRAMMING}`}
              style={styles.navListItemLink}
            >
              Programming
            </Link>
          </li>
          <li style={styles.navListItem}>
            <Link
              to={`/records-archive/${ABOUT}`}
              style={styles.navListItemLink}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
