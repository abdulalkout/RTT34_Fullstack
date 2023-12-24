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
      <div className="form-div">
        <form action="" method="">
          Name: <input type="text" name="name" />
          <br />
          Discription: <input type="text" name="discription" />
          <br />
          Price: <input type="number" name="price" />
          <br />
          Image: <input type="text" name="img" />
          <br />
          <div>
            <a href="/cooperation">Back</a>
            <input type="submit" name="" value="Add new" />
          </div>
        </form>
      </div>
      {Array.isArray(devCoop) && devCoop.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        showDevCoop()
      )}
    </div>
  );
}

export default DevelopersCooperation;
