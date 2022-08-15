import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <p className="text-2xl text-center px-5 font-black">
        Welcome to <span className="text-blue-500">codebar</span> scanner app
      </p>
      <img src="/scanner-image.webp" alt="scanner" className="w-full " />
      <Link to="/home">
        <button className="border font-bold px-10 py-2 bg-blue-500 text-white rounded-md">
          Get started
        </button>
      </Link>
    </div>
  );
};

export default WelcomePage;
