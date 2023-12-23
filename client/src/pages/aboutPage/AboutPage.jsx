import React from "react";
import "./AboutPage.css"
import logo from './logo.svg';


function AboutPage() {
  return (
    <div className="aboutPage">
      <h1 className="title-bottom-map">
          Diverse Technological Talent On A National Scale
      </h1>
      <h3 className="titlebottom-paragraph">With 20 National Locations</h3>
      <img className="perscholas-map" src="/perscholas-map.png" alt="Per Scholas Map" />
      <div className="info">
        <h1>About Our Project</h1>
        <p>We students here at RTT34 Cohort are collaboratively working on an innovative React.js project, 
            showcasing our appreciation to Perscholas and dedication to mastering software engineering skills. 
            Hailing from diverse backgrounds, each student brings a unique perspective to the table, enriching the project 
            with varied experiences. As we progress through the course, our collective efforts reflect not only technical proficiency 
            but also the resilience and adaptability cultivated in PerScholas dynamic learning environment. 
            This React.js project stands as a testament to our growth over these last few months, blending individual strengths 
            into a cohesive and impressive demonstration of our newfound expertise.</p>
        <h1>How We Built Our App</h1>
        <img src={logo} className="App-logo" alt="logo" height="200px" width="200px" />
        <p>To build this app, students used a combination of JavaScript, HTML, CSS  and the React library. With the separation of concerns
           design principle in mind, students wrote code as simple as possible for easy maintenance.<br/>Semantic coding was used in HTML 
           to allow code to be easily read and for greater accessibility between students. Responsive designs were used in CSS to create 
           a functional app that will respond to different devices after application deployment. JavaScript functions such as loops were used,
           as well as methods such as map() to iterate through arrays to display developer information. This can be seen in the display of 
           student developers who worked on this project, on the home page. Developers took advantage of the React library by using not only 
           React hooks such as useContext, but also the React Router routing library, which was used to navigate through the various pages of 
           this application. </p>
        <h1>Project Delegation</h1>
        <p>This project began with a small group of student developers but grew in numbers once other students learned of the project. This
          brought upon the ability to delegate tasks between students. Different pages were assgined to different students but when roadbumps 
          were hit, students worked together to resolve any issue, debug any problems, or help one another code to achieve a specific functionality.
        </p>
      </div>
    </div>
  )}

export default AboutPage;
