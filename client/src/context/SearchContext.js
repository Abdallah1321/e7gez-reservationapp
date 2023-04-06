import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  startDate: undefined,
  seats: undefined,
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ seats }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        startDate: state.startDate,
        seats: state.seats,
        dispatch,
      }}
    >
      {seats}
    </SearchContext.Provider>
  );
};
