// Dre
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="instructors-div">
        <h2>PerScholas Instructors</h2>
        <ul>
          <li>Teo Marcelo</li>
          <li>Jordan Wofford</li>
          <li>Dylan Comeau</li>
          <li>Victor Vasquez</li>
        </ul>
      </div>
      <div className="instructors-div">
        <h2>The Developers</h2>
        <ul>
          <li>Abdul Alkout</li>
          <li>Jorge Robayo</li>
          <li>Deandre Byrd</li>
          <li>Mouloud Chabouni</li>
          <li>Nurredyn Ballout</li>
          <li>Affaf</li>
          <li>Carmen</li>
        </ul>
      </div>
      <div className="about-div">
        <h2>About</h2>
        <p>
          Perscholas empowers students by offering comprehensive
          industry-aligned courses that cultivate practical skills and foster a
          collaborative learning environment, preparing graduates for success in
          the ever-evolving tech landscape.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
