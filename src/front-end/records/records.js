import { CS, PORTFOLIO, PROGRAMMING } from "../page/pageReducer";
import ChessGame from "./portfolio/chess/ChessGame";

const README = "README";

export const subjects = {
  portfolio: {
    chess: ["README"],
  },
  cs: {
    network: [],
    os: [],
    ca: [],
    database: [],
  },
  programming: {
    java: [],
    javascript: [],
    python: [],
    c: [],
  },
};

export const getContents = (category, subject) => {
  return subjects[category][subject].map((item, index) => ({
    category: category,
    subject: subject,
    content: item,
  }));
};

export const selectPortfolio = (name) => {
  switch (name) {
    case "chess":
      return <ChessGame />;
    default:
  }
};
