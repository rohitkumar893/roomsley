import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavButtons = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);

    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <nav className="navbuttons h-[105px] flex justify-center items-center gap-[60px] md:gap-[142px]">
      <h2
        className="text-[18px] text-teal-700 hover:scale-110 font-semibold cursor-pointer"
        onClick={() => window.location.reload()}
      >
        HOME
      </h2>

      {isLoggedIn ? (
        <h2
          onClick={handleLogout}
          className="cursor-pointer text-[18px] text-teal-700 hover:scale-110 text-teal font-semibold"
        >
          LOGOUT
        </h2>
      ) : (
        <>
          <Link to="/login">
            <h2 className="text-[18px] hover:scale-110 text-teal-700 font-semibold">LOGIN</h2>
          </Link>
          <Link to="/signup">
            <h2 className="text-[18px] hover:scale-110 text-teal-700 font-semibold">SIGNUP</h2>
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavButtons;
