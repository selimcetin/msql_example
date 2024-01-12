import { createContext, useReducer } from "react";
import { customReducer, initialState } from "../reducers/customReducer";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
