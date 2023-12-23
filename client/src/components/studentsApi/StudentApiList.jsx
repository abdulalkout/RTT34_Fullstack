
import React, { useContext } from 'react';
import { APIContext } from '../../contexts/apiContexts/apiContext';
import "./StudentsApiList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function StudentApiList() {
  const apiData = useContext(APIContext);

  return (
    <div className="ApiList-container">
      <h1 className="ApiList-title">Student API List</h1>
      <ul>
        {apiData.map((api, index) => (
          <li className="ApiList-item" key={index}>
            <strong>{api.name}</strong> ,{" "}
            <strong className="ApiList-icon">
              <FontAwesomeIcon icon={faLink} style={{ color: "#007bff" }} />
            </strong>{" "}
            <a
              className="ApiList-link"
              href={api.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {api.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentApiList;



