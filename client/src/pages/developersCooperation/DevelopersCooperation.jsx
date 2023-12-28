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
    <div className="developers-cooperation-div">
      <div className="form-div">
        <form action="/cooperation" method="POST">
          Name:*
          <br />
          <input
            type="text"
            name="name"
            placeholder="First Name"
            className="name-input"
          />
          <br />
          Discription:*
          <br />
          <input
            type="text"
            name="discription"
            placeholder="Discription of your code"
            className="name-input"
          />
          <br />
          Code:
          <br />
          <input
            className="code-input name-input"
            type="text"
            name="code"
            placeholder="{ Past your code in here}"
          />
          <br />
          Links:
          <br />
          <input
            type="text"
            name="links"
            placeholder="Links (comma-separated)"
            className="name-input"
          />
          <br />
          Image:
          <br />
          <input
            type="text"
            name="img"
            placeholder="Image for your work"
            className="name-input"
          />
          <br />
          <div>
            <input
              type="submit"
              name=""
              value="Add new"
              className="submit-new"
            />
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
