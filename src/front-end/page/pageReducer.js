import { combineReducers, createStore } from "redux";

export const INDEX = "index";
export const PORTFOLIO = "portfolio";
export const CS = "cs";
export const PROGRAMMING = "programming";
export const ABOUT = "about";

const defaultState = {
  current: INDEX,
  page: INDEX,
};

const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INDEX:
      return moveToFirst();
    case CS:
      return moveToCS();
    case PROGRAMMING:
      return moveToProgramming();
    case ABOUT:
      return moveToAbout();
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  category: pageReducer,
});

export const mapStateToProps = (state) => {
  return { page: state };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    moveToFirst: (page) => {
      dispatch(moveToFirst(page));
    },
    moveToCS: (page) => {
      dispatch(moveToFirst(page));
    },
    moveToPROGRAMMING: (page) => {
      dispatch(moveToProgramming(page));
    },
  };
};

const moveToFirst = (page) => {
  return {
    type: INDEX,
    page: page,
  };
};

const moveToCS = (page) => {
  return {
    type: CS,
    page: page,
  };
};

const moveToProgramming = (page) => {
  return {
    type: PROGRAMMING,
    page: page,
  };
};

const moveToAbout = (page) => {
  return {
    type: ABOUT,
    page: page,
  };
};
