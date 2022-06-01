import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { selectPortfolio } from "../records/records";
import { PORTFOLIO } from "./pageReducer";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      subject: props.subject,
      content: props.content,
      markdown: "",
    };
  }

  componentDidMount() {
    const readmePath = require(`/home/portfolios/records-archive/src/front-end/records/${this.state.category}/${this.state.subject}/${this.state.content}.md`);
    fetch(readmePath)
      .then((response) => response.text())
      .then((text) => {
        this.setState({
          markdown: text,
        });
      });
  }

  render() {
    return (
      <>
        {selectPortfolio(this.state.subject)}
        <section
          style={{
            display: "block",
            border: "3px solid",
            maxWidth: "700px",
            minWidth: "480px",
            margin: "100px auto",
            wordBreak: "break-word",
            padding: "50px",
          }}
        >
          <ReactMarkdown
            children={this.state.markdown}
            remarkPlugins={[remarkGfm]}
          />
        </section>
      </>
    );
  }
}

export default Page;
