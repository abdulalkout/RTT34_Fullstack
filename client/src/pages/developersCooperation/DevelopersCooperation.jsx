import React from "react";
import "./DevelopersCooperation.css";
import { useContext, useEffect, useState } from "react";
import DevelopersCooperationCard from "./DevelopersCooperationCard";
import { DevcoopContext } from "../../contexts/apiContexts/devcoopContext";

function DevelopersCooperation() {
  // const devCoop = useContext(DevcoopContext);

  // useEffect(() => {
  //   console.log(devCoop);
  // }, []);

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

  const showDevCoop = () => {
    return (
      <div className="cooperation-card-list">
        {devCoop.map((item, index) => {
          return (
            <div key={index} className="cooperation-card">
              <DevelopersCooperationCard item={item} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {Array.isArray(devCoop) && devCoop.length === 0 ? (
        <p>Loading...</p>
      ) : (
        showDevCoop()
      )}
    </div>
  );
}

export default DevelopersCooperation;
