import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <p className="welcome-text">
        Welcome to <span className="code-span">code</span>
        <span className="bar-span">bar</span> scanner app
      </p>
      <Link to="/home">
        <button className="get-started-btn">Get started</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
