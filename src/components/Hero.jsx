import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="landingcontainer flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-[48px]">
        <div className="flex flex-wrap justify-center items-center gap-[10px] select-none">
          <img src="property.png" className="h-[52px] w-[52px]" />
          <h1 className="textlogo text-[47px] font-bold">Find</h1>
          <h1 className="textlogo text-[47px] font-bold text-teal">Perfect</h1>
          <h1 className="textlogo text-[47px] font-bold">Room.</h1>
        </div>

        <h2 className="text-center text-gray-700 text-[20px] max-w-[580px]">
          Finding a room or offering one? Roomsley makes it simple and quick.
        </h2>

        <Link to="/listings">
          <button className="buttonn w-[265px] shadow-md">
            <img src="roomicon.png" className="h-[34px]" />
            <h1 className="text-[20px] font-semibold">AVAILABLE ROOMS</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
