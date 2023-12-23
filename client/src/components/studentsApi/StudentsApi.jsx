import React from "react";
import { Link } from "react-router-dom";
import "./StudentsApiList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

function StudentsApi() {
  return (
    <div className="Api-list-container">
      <div className="title-Api-Container">
        <h1>Student API's</h1>
        <p>
          As Per Scholas students, we understand the challenges of finding
          quality free APIs for our projects. That's why we are eager to
          contribute by offering a selection of free APIs that can elevate and
          enrich your projects. In the realm of web development, mastering the
          art of fetching and utilizing data from APIs is crucial. Our goal is
          to provide you with accessible resources that not only facilitate your
          learning but also empower your projects to reach the next level. We
          believe that having access to diverse and reliable APIs is fundamental
          for a well-rounded education in web development. Let's build a
          community where sharing knowledge and resources propels everyone
          forward! <strong>click here</strong>
          <Link to="/StudentApiList"><FontAwesomeIcon icon={faUpRightFromSquare} style={{color: "#000000",}} /></Link>
        </p>
      </div>
      <img
        className="Api-Image"
        src="https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg"
        alt="FreeApi"
      />
    </div>
  );
}

export default StudentsApi;
