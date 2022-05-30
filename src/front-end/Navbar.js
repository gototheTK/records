import React, { Component } from "react";
import * as styles from "./styles";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <a href={"/records-archive"}>
          <h1 style={styles.logo}>CHJ's Archive</h1>
        </a>
        <ul>
          <li style={styles.navListItem}>
            <a href="#" style={styles.navListItemLink}>
              Chess
            </a>
          </li>
          <li style={styles.navListItem}>
            <a href="#" style={styles.navListItemLink}>
              CS
            </a>
          </li>
          <li style={styles.navListItem}>
            <a href="#" style={styles.navListItemLink}>
              Programming
            </a>
          </li>
          <li style={styles.navListItem}>
            <a href="#" style={styles.navListItemLink}>
              About
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
