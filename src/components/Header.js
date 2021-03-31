import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper" id="header">
      <div className="main-info">
        <h1>full-stack development</h1>
        <Typed
          className="typed-text"
          strings={[
            "Back-end Development",
            "Front-end Development",
            "Machine Learning",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
