/*import React, { useState, createContext, useEffect, useReducer } from "react";
import { getPeople } from "./api/movie-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    default:
      return state;
  }
};

const PeopleContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { people: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getPeople().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <PeopleContext.Provider
      value={{
        people: state.movies,
        setAuthenticated
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider*/