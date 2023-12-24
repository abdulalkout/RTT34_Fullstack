import React from "react";
import { createContext, useState, useEffect } from "react";

export const DevcoopContext = createContext([]);

function DevcoopContextProvider(props) {
  const [devCoop, setDevCoop] = useState([]);

  const bringapi = async () => {
    try {
      const response = await fetch("/developersCoop");
      const data = await response.json();
      setDevCoop(data);
    } catch (err) {
      console.log("err when fetching devcoops");
    }
  };
  useEffect(() => {
    bringapi();
  }, []);

  return (
    <DevcoopContext.Provider value={devCoop || []}>
      {props.children}
    </DevcoopContext.Provider>
  );
}

export default DevcoopContextProvider;
