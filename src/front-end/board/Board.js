import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: "" };
  }

  componentDidMount() {
    const readmePath = require("../../chess/README.md");
    fetch(readmePath)
      .then((response) => response.text())
      .then((text) => {
        console.log(text);
        this.setState({
          markdown: text,
        });
      });
  }

  render() {
    return (
      <section
        style={{
          display: "block",
          border: "5px solid",
          maxWidth: "700px",
          minWidth: "500px",
          margin: "100px auto",
          wordBreak: "break-word",
        }}
      >
        <ReactMarkdown
          children={this.state.markdown}
          remarkPlugins={[remarkGfm]}
        />
      </section>
    );
  }
}

export default Board;
