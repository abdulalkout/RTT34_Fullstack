import React from "react";
import "./DevelopersCooperation.css";
import { useState } from "react";

function DevelopersCooperationCard({ item }) {
  const [showCard, setShowCard] = useState(true);

  const showDiscription = () => {
    return (
      <div>
        {item.img ? (
          <img className="cooperation-card-img" src={item.img} />
        ) : null}
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
        <form action={`/cooperation/${item._id}?_method=DELETE`} method="POST">
          <input type="submit" value="Delete" />
        </form>
      </div>
    );
  };

  return <div>{showCard ? showDiscription() : showContent()}</div>;
}

export default DevelopersCooperationCard;
