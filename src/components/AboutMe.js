import React from "react";
import myPhoto from "../logo.png";

const AboutMe = () => {
  const text = `I'm an enthusiastic, responsible and hard working IT person.\
    I am able to work well both in a team environment as well as using own initiative.\
    I am able to work well under pressure and adhere to strict deadlines.\
    And I am seeking a position that incorporates critical thinking, problem-solving,\
    leadership skills and expands and improves on current skill sets.`;

  return (
    <div className="container" id="aboutMe">
      <div className="row justify-content-center align-items-center" id="text">
        <div className="col">
          <h1>Hi, I'm Mahmoud Zridi.</h1>
          <p>{text}</p>
        </div>
        <div className="col" id="image">
          <a className="personalPhoto" href="#">
            <img className="img-fluid" src={myPhoto} alt="mahmoud" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
