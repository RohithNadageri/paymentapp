import { createStore } from "redux";

const initialState = {
  users: [],
  loggedInUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state, action.payload],
      };
    case "SET_LOGIN":
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case "SET_LOGOUT":
      return {
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
