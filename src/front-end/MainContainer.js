import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import Category from "./page/Category";
import { ABOUT, CS, INDEX, PORTFOLIO, PROGRAMMING } from "./page/pageReducer";
import { subjects } from "./records/records";

const Index = () => <Category category={INDEX} />;
const Portfolio = () => <Category category={PORTFOLIO} />;
const ComputerScience = () => <Category category={CS} />;
const Programming = () => <Category category={PROGRAMMING} />;
const About = () => <div></div>;

class MainContainer extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Hamburger />
          <Routes>
            <Route
              path={`/records-archive/${PORTFOLIO}/*`}
              element={<Portfolio />}
            />
            <Route
              path={`/records-archive/${CS}/*`}
              element={<ComputerScience />}
            />
            <Route
              path={`/records-archive/${PROGRAMMING}/*`}
              element={<Programming />}
            />
            <Route path={`/records-archive/${ABOUT}/*`} element={<About />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default MainContainer;
