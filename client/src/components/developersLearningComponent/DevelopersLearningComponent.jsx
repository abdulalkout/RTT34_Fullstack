import React from "react";
import "./DevelopersLearningComponent.css";
import { Link } from "react-router-dom";

function DevelopersLearningComponent() {
  return (
    <div className="developers-learning-component">
      <p className="developer-learning-title">Developers cooperation</p>
      <h4  className="developer-learning-discription">
        In this section you will find cool small projects and solving small
        coding problems
      </h4>
      <img
        className="developer-learning-image"
        src="https://cdn-blog.scalablepath.com/uploads/2018/05/designers-developers-collaboration-tools-1.png"
      />
      <br />
      <button className="developer-learning-button">
        <Link className="developer-learning-link" to="/cooperation">
           <h4>Checkout the cool codes</h4>
        </Link>
      </button>
    </div>
  );
}

export default DevelopersLearningComponent;
