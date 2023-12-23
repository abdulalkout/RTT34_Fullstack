import React from "react";

//import components
import Introduction from "../../components/introduction/Introduction";
import StoriesList from "../../components/stories/StoriesList";
import StudentsApi from "../../components/studentsApi/StudentsApi";
import DevelopersLearningComponent from "../../components/developersLearningComponent/DevelopersLearningComponent";

function HomePage() {
  return (
    <div>
      <Introduction />
      <StoriesList />
      <StudentsApi />
      <DevelopersLearningComponent />
    </div>
  );
}

export default HomePage;
