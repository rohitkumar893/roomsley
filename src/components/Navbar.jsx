import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar h-[68px] w-full flex justify-between items-center bg-gray-800 text-[22px]">
      <div className="flex items-center gap-1">
        <img src="door.png" className="homeicon h-[35px]" />
        <h1 className="text-white cursor-pointer" onClick={() => window.location.reload()}>
          Roomsley
        </h1>
      </div>

      <Link to="/about">
        <img
          src="about.png"
          title="About"
          className="h-[35px] w-[35px] hover:scale-110"
        />
      </Link>
    </nav>
  );
};

export default Navbar;