import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getContents, getSubjects, subjects } from "../records/records";
import * as styles from "./ItemStyles";

function Item({ category, subject, content }) {
  return (
    <div className={"item"} style={styles.item}>
      <div>
        <h2>{category.toUpperCase()}</h2>
      </div>
      <div>
        <Link to={`/${category}/${subject}/${content.file}`}>
          <h2>{subject.toUpperCase()}</h2>
        </Link>
      </div>
      <span>
        <h4>{content.start.toISOString().substring(0, 10)}</h4>
        <h4>~</h4>
        <h4>
          {content.end === "" ? "" : content.end.toISOString().substring(0, 10)}
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