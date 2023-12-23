import React from "react";
import "./Introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
//======== 

function Introduction() {
  return (
    <div className="introduction-container">
      <h1 className="Big-title-Introduction">About Per Scholas</h1>

      <div className="section1-Introduction-container">
        <h1 className="title1-Introduction">Developers Potential</h1>
        <p className="paragraph1-Introduction">
          We as students appreciate Perscholas for its signifcant role in student success.
          The platforms flexibility allows us to tailor our learning experience in a unique way.
          The diversity is outstanding and the range of different courses caters to our various 
          interests and academic needs to ensure well rounded education. The interactive nature
          of online classes encourages active participation and collaboration, enhancing our understanding
          of the material. Perscholas for us as students and learners is a valuable tool to empower us 
          to succedd in the world of engineering. 
        </p>
      </div>

      <div className="section2-Introduction-container">
        <div className="Section2-Content-title-image">
          <h1 className="title2-Introduction">
            Creating Opportunity for Careers in Tech
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{ color: "rgb(43, 55, 58)", marginLeft:'2%' }}
            />
          </h1>
          <p className="paragraph2-Introduction">
            We worked directly with Victor Vasquez. We as students would just like to say
            Thank You for empowering us with invaluable skills in job searching
            and providing insights into the business aspects of software engineering.
            Your guidance has been instrumental in shaping our career paths.
          </p>
        </div>
        <img
          className="section2-image-carrer"
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Careers in Tech"
        />
      </div>

      <div className="section3-Introduction-container">
        <img
          className="section3-image-skill"
          src="https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tech skills"
        />
        <div className="Section3-Content-title-image">
          <h1 className="title3-Introduction">
            Closing the Tech Skills <br/> Divide
            <FontAwesomeIcon 
            icon={faChalkboardUser} 
            style={{color: "rgb(43, 55, 58)", marginLeft:'2%'}} 
            />
          </h1>
          <p className="paragraph3-Introduction">
            We are incredibly grateful for our instructors Teo Marcelo, Jordan Wofford
            and Dylan Comeau. You guys have not only imparted valuable coding skills 
            but also played a pivoting role in guiding us into the software engineering
            field. You guys expertise and dedication has been extremely helpful in shaping 
            our upcoming journies. We appreciate your commitment to pull us through challenges,
            hosting a supportive learning environment, and instilling the confidence needed to 
            succeed in this dynamic field. Thank you all for being the driving force behind 
            our entry into the world of software engineering. 
          </p>
        </div>
      </div>

      <div className="section4-Introduction-container">
        <div className="Section2-Content-title-image">
          <h1 className="title4-Introduction">
            Achieving Diversity in the Tech Workforce
            <FontAwesomeIcon 
            icon={faUniversalAccess} 
            style={{color: "rgb(43, 55, 58)", marginLeft:'2%'}} 
            />
          </h1>
          <p className="paragraph4-Introduction">
            We here at RTT-34 cohort are fortunate to belong to a diverse group, representing 
            various corners of the world, each bringing a unique perspective to our coding community.
            The richness of our collective experiences enhances the learning environment, 
            creating a tapestry of ideas and cultural insights. Despite our differences,
            we come together with a shared passion for coding, forming connections that transcend geographical boundaries. 
            This diversity not only fosters a collaborative 
            spirit but also exposes us to a wealth of perspectives, making our coding journey not just educational 
            but also culturally enriching. It's a privilege to learn 
            and grow alongside such a globally diverse and dynamic group.
          </p>
        </div>
        <img
          className="section4-image-diversity"
          src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="diversity Image"
        />
      </div>
    </div>
  );
}

export default Introduction;
