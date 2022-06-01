import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { getContents, getSubjects, subjects } from "../records/records";
import List from "./List";
import Page from "./Page";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      items: Object.keys(subjects[props.category]).reduce(
        (prev, curr) => prev.concat(getContents(props.category, curr)),
        []
      ),
    };
  }

  render() {
    return (
      <Routes>
        <Route
          key={this.state.category}
          path={`/*`}
          element={
            <List category={this.state.category} items={this.state.items} />
          }
        />
        {this.state.items.map((item, index) => (
          <Route
            key={index}
            path={`/${item.subject}/${item.content.file}`}
            element={
              <Page
                key={index}
                category={item.category}
                subject={item.subject}
                content={item.content}
              />
            }
          />
        ))}
      </Routes>
    );
  }
}

export default Category;
