import React, { ReactNode, useContext, useReducer } from "react";
import {
  ACTION_TYPE,
  InitialState,
  reducer,
  state,
  Store,
} from "../model/ContextModel";

interface Children {
  children: ReactNode;
}
const ContextApplication = React.createContext<Store | undefined>(undefined);
const Context = ({ children }: Children) => {
  const [initialState, dispatch] = useReducer<
    React.Reducer<InitialState, ACTION_TYPE>
  >(reducer, state);
  return (
    <ContextApplication.Provider value={{ initialState, dispatch }}>
      {children}
    </ContextApplication.Provider>
  );
};
export const useContextStore = () => useContext(ContextApplication);
export default Context;
