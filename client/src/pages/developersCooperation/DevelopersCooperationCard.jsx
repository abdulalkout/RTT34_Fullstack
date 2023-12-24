import React from "react";
import "./DevelopersCooperation.css";
import { useState } from "react";

function DevelopersCooperationCard({ item }) {
  const [showCard, setShowCard] = useState(true);

  const showDiscription = () => {
    return (
      <div>
        <img className="cooperation-card-img" src={item.img} />
        <p>{item.discription}</p>
        <p>Created by: {item.name}</p>
        <button
          className="show-card-button"
          onClick={() => {
            setShowCard(!showCard);
          }}
        >
          Check It Out
        </button>
      </div>
    );
  };

  const openLinkInNewWindow = (url) => {
    window.open(url, "_blank");
  };

  const showLinks = () => {
    return (
      <div>
        {item.links.map((link, index) => (
          <div key={index}>
            <a href={link}>{link}</a>
          </div>
        ))}
      </div>
    );
  };

  const showContent = () => {
    return (
      <div>
        <p>{item.code ? item.code : null}</p>
        <p>{item.links ? showLinks() : null}</p>
        <button
          className="show-card-button"
          onClick={() => {
            setShowCard(!showCard);
          }}
        >
          Discription
        </button>
      </div>
    );
  };

  return <div>{showCard ? showDiscription() : showContent()}</div>;
}

export default DevelopersCooperationCard;
