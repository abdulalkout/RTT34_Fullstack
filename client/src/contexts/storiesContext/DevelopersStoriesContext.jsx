import React from "react";
import { createContext } from "react";
import developersStories from "../../module/developersStories";

export const DevelopersStoriesContext = createContext(developersStories);

function DevelopersStoriesContextProvider(props) {
  return (
    <DevelopersStoriesContext.Provider value={{ developersStories }}>
      {props.children}
    </DevelopersStoriesContext.Provider>
  );
}

export default DevelopersStoriesContextProvider;
