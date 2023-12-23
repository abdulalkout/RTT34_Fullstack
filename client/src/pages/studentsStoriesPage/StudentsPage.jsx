import React from "react";
import "./StudentsPage.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import developersStories from "../../module/developersStories";

function StudentsPage() {
  const index = useParams().index;
  const [color, setColor] = useState(""); 

  const changeColor = () => {
    const body = document.body;
    if (body.style.backgroundColor === "rgb(56, 56, 56)") {
      body.style.backgroundColor = color;
    } else {
     
      setColor(body.style.backgroundColor);
      body.style.backgroundColor = "rgb(56, 56, 56)";
    }
  };
  return (
    <div>
      <div className="main">

      <div className="on" onClick={changeColor}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/885/202/non_2x/ceiling-lamp-on-transparent-background-free-png.png"
            alt="light"
          />

        </div>

      <div className="part-n">
      <div className="left">
        <h1 className="meet-h1"> Hello  I am {developersStories[index].name}</h1>
        <p className="paragraph1">
          {developersStories[index].story}
        </p>
      </div>

      </div>
      
    </div>

    <div className="image-container">
        <img className="dev-image" src={developersStories[index].img} alt="image" />
      </div>

    <div class="curve"></div>

    <div className="part-n2">
    <div>
        <h1 className="project-h1">Projects and Contributions</h1>
         <div className="paragraph2">
          <p>
          {developersStories[index].story}
        </p>
        </div> 
      </div>
      <div className="project-container">
        <ul className="project-list">
          <h4>You can access the projects here:</h4>
          {developersStories[index].projects.map((project, i) => {
            return (
              <li key={i}>
                {project}
              </li>
            )
          })}
        </ul>
      </div>

    </div>
    </div>
  );
}

export default StudentsPage;
