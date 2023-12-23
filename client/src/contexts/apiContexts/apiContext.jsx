import React from "react";
import { createContext } from "react";
import apiData from "../../module/apiData";

export const APIContext = createContext([]);

function APIContextProvider(props) {
  return <APIContext.Provider value={apiData}>{props.children}</APIContext.Provider>;
}

export default APIContextProvider;
