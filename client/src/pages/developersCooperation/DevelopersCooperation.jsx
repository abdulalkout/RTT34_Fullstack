import React from "react";
import "./DevelopersCooperation.css";
import { useContext, useEffect, useState } from "react";
import DevelopersCooperationCard from "./DevelopersCooperationCard";
import { DevcoopContext } from "../../contexts/apiContexts/devcoopContext";

function DevelopersCooperation() {
  const devCoop = useContext(DevcoopContext);

  const showDevCoop = () => {
    return (
      <>
        <div className="cooperation-card-list">
          {devCoop.map((item, index) => {
            return (
              <div key={index} className="cooperation-card">
                <DevelopersCooperationCard item={item} />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      {Array.isArray(devCoop) && devCoop.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        showDevCoop()
      )}
    </div>
  );
}

export default DevelopersCooperation;
