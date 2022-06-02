import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getContents, getSubjects, subjects } from "../records/records";
import * as styles from "./ItemStyles";
import { PORTFOLIO } from "./pageReducer";

function Item({ category, subject, content }) {
  return (
    <div className={"item"} style={styles.item}>
      <div>
        <h2>{category.toUpperCase()}</h2>
        {category === PORTFOLIO ? "" : <h2> {subject.toUpperCase()}</h2>}
      </div>
      <div>
        <Link to={`/${category}/${subject}/${content.file}`}>
          <h2>
            {category === PORTFOLIO
              ? subject.toUpperCase()
              : content.file.toUpperCase()}
          </h2>
        </Link>
      </div>
      <span>
        <h4>
          {content.start === ""
            ? ""
            : `${content.start.getFullYear()}.${content.start.getMonth()}.${content.start.getDate()}`}
        </h4>
        {content.start === "" ? "" : <h4>~</h4>}
        <h4>
          {content.end === ""
            ? ""
            : `${content.end.getFullYear()}.${content.end.getMonth()}.${content.end.getDate()}`}
        </h4>
      </span>
    </div>
  );
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      items: props.items,
    };
  }

  render() {
    return (
      <>
        {this.state.items.map((item, index) => (
          <Item
            category={this.state.category}
            subject={item.subject}
            content={item.content}
            key={index}
          />
        ))}
      </>
    );
  }
}

export default List;
