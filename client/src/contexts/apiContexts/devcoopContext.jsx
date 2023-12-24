import React from "react";
import { createContext, useState, useEffect } from "react";

export const DevcoopContext = createContext([]);

function DevcoopContextProvider(props) {
  const [devCoop, setDevCoop] = useState([]);

  useEffect(() => {
    const bringapi = async () => {
      try {
        const response = await fetch("/developersCoop");
        const data = await response.json();
        setDevCoop(data.devcoop);
        console.log(data.devcoop);
      } catch (err) {
        console.log("err when fetching devcoops");
      }
    };

    bringapi();
  }, []);
  return (
    <DevcoopContext.Provider value={devCoop || []}>
      {props.children}
    </DevcoopContext.Provider>
  );
}

export default DevcoopContextProvider;
