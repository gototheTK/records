import { CS, PORTFOLIO, PROGRAMMING } from "../page/pageReducer";
import ChessGame from "./portfolio/chess/ChessGame";
import Freecodecamp from "./portfolio/freecodecamp/Freecodecamp";

const README = "README";

export const subjects = {
  portfolio: {
    chess: [{ file: README, start: new Date(2022, 5, 15), end: "" }],
    freecodecamp: [
      {
        file: README,
        start: new Date(2022, 4, 15),
        end: new Date(2022, 4, 30),
      },
    ],
    community: [
      { file: README, start: new Date(2021, 7, 1), end: new Date(2021, 7, 21) },
    ],
    board: [
      {
        file: README,
        start: new Date(2020, 12, 19),
        end: new Date(2020, 12, 23),
      },
    ],
    movieRecommend: [
      {
        file: README,
        start: new Date(2020, 3, 19),
        end: new Date(2020, 4, 19),
      },
    ],
    javaSwingProject: [
      { file: README, start: new Date(2019, 5, 15), end: new Date(2019, 6, 4) },
    ],
  },
  cs: {
    database: [
      {
        file: "Introduction_To_Database",
        start: new Date(2023, 4, 27),
        end: "",
      },
      {
        file: "Postgre_SQL_DataBase",
        start: new Date(2022, 5, 15),
        end: new Date(2022, 6, 20),
      },
      {
        file: "Basic_Database",
        start: new Date(2022, 5, 14),
        end: new Date(2022, 6, 20),
      },
    ],
    data_structures: [
      {
        file: "Linked_List",
        start: new Date(2022, 6, 4),
        end: new Date(2022, 6, 20),
      },
      {
        file: "Graph",
        start: new Date(2023, 6, 18),
        end: new Date(2023, 6, 19),
      },
    ],
    network: [
      {
        file: "Computer_And_Internet2",
        start: new Date(2022, 6, 5),
        end: new Date(2022, 6, 20),
      },
      {
        file: "Computer_And_Internet1",
        start: new Date(2022, 6, 3),
        end: new Date(2022, 6, 5),
      },
      {
        file: "Basic_Web",
        start: "",
        end: new Date(2022, 5, 18),
      },
      {
        file: "Basic_Network",
        start: "",
        end: new Date(2022, 5, 17),
      },
    ],
    os: [],
    ca: [],
  },
  programming: {
    java: [],
    javascript: [
      { file: "Fundamentals_Javascript", start: new Date(2022, 6, 8), end: "" },
    ],
    python: [],
    c: [],
    linux: [
      { file: "Basic_Command", start: "", end: new Date(2022, 4, 30) },
      { file: "Bash_Command_And_SQL", start: new Date(2023, 5, 24), end: "" },
      {
        file: "Git_Commands",
        start: new Date(2023, 6, 1),
        end: new Date(2023, 6, 9),
      },
    ],
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
    case "freecodecamp":
      return <Freecodecamp />;
    default:
  }
};
