import React from "react";
import "./AboutPage.css";
import logo from "./logo.svg";

function AboutPage() {
  return (
    <div className="aboutPage">
      <h1 className="title-bottom-map">
        Diverse Technological Talent On A National Scale
      </h1>
      <h3 className="titlebottom-paragraph">With 20 National Locations</h3>
      <img
        className="perscholas-map"
        src="https://i.etsystatic.com/11441782/r/il/811bac/3979510584/il_1080xN.3979510584_pw3t.jpg"
        alt="Per Scholas Map"
      />
      <div className="info">
        <container className="about-delegation-container">
          <div className="about-project-div">
            <div>
              <h1>About Our Project</h1>
              <img 
              className="about-project-img"
              src="https://png.pngtree.com/png-clipart/20221220/original/pngtree-pensive-woman-thinking-making-decision-png-image_8789421.png" alt="" />
              <p className="about-project-p">
                We students here at RTT34 Cohort are collaboratively working on
                an innovative React.js project, showcasing our appreciation to
                Perscholas and dedication to mastering software engineering
                skills. Hailing from diverse backgrounds, each student brings a
                unique perspective to the table, enriching the project with
                varied experiences. As we progress through the course, our
                collective efforts reflect not only technical proficiency but
                also the resilience and adaptability cultivated in PerScholas
                dynamic learning environment. This React.js project stands as a
                testament to our growth over these last few months, blending
                individual strengths into a cohesive and impressive
                demonstration of our newfound expertise.
              </p>
            </div>
          </div>

          <div className="delegation-div">
            <h1>Project Delegation</h1>
            <img
              className="delegation-img"
              src="data:image/png;base64,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"
              alt=""
            />
            <p className="delegation-p">
              This project began with a small group of student developers but
              grew in numbers once other students learned of the project. This
              brought upon the ability to delegate tasks between students.
              Different pages were assgined to different students but when
              roadbumps were hit, students worked together to resolve any issue,
              debug any problems, or help one another code to achieve a specific
              functionality.
            </p>
          </div>
        </container>

        <container className="how-built-container">
          <div className="how-built-div">
            <h1>How We Built Our App</h1>
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              height="200px"
              width="200px"
            />
            <p className="how-built-p">
              To build this app, students used a combination of JavaScript,
              HTML, CSS and the React library. With the separation of concerns
              design principle in mind, students wrote code as simple as
              possible for easy maintenance.
              <br />
              Semantic coding was used in HTML to allow code to be easily read
              and for greater accessibility between students. Responsive designs
              were used in CSS to create a functional app that will respond to
              different devices after application deployment. JavaScript
              functions such as loops were used, as well as methods such as
              map() to iterate through arrays to display developer information.
              This can be seen in the display of student developers who worked
              on this project, on the home page. Developers took advantage of
              the React library by using not only React hooks such as
              useContext, but also the React Router routing library, which was
              used to navigate through the various pages of this application.{" "}
            </p>
          </div>
        </container>
      </div>
    </div>
  );
}

export default AboutPage;
