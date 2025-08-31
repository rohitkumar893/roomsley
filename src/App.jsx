import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  const checkLoginStatus = () => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  };

  checkLoginStatus();

  window.addEventListener("storage", checkLoginStatus);
  return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

    const handleLogout = () => {
      window.location.href = "/"
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
  };

  const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchInput.trim();
    if(query !== ""){
      navigate("/search?query=" + encodeURIComponent(query));
    }
  }

  useEffect(() => {
    fetch("https://roomsleybackendrender.onrender.com/ping")
      .then((res) => {
        if (!res.ok) throw new Error("Ping failed");
        console.log("Backend is awake");
      })
      .catch((err) => {
        console.error("Ping failed", err);
      });
  }, []);

  return (
    <>
      <div className="first w-[100%]">
      <nav className="h-[68px] w-full flex justify-between items-center bg-gray-800 text-[22px] z-50">
        <div className='w-full flex justify-start items-center gap-[8px]'>
          <img src='door.png' className='homeicon h-[35px]'></img>
          <h1 className='text-white cursor-pointer' onClick={() => window.location.reload()}>Roomsley</h1>
        </div>

        <Link to='/about' className='about'>
        <img src='about.png' title="About" className='object-fill sm:h-[35px] sm:w-[35px] h-[35px] w-[35px] hover:scale-110'></img>
        </Link>
        </nav>

        <nav className='navbuttons h-[105px] flex justify-center items-center gap-[60px] md:gap-[142px]'>
          <ul>
          <h2 className='homebtn text-[18px] text-teal hover:scale-110 hover:text-teal-700 font-semibold' onClick={() => window.location.reload()}>HOME</h2>
          </ul>
            {isLoggedIn ? (
              <ul>
                <h2
                  onClick={handleLogout}
                  className='cursor-pointer text-[18px] hover:scale-110 text-teal font-semibold'
                >
                  LOGOUT
                </h2>
              </ul>
            ) : (
              <>
                <ul>
                  <Link to="/login">
                    <h2 className='navbuttons text-[18px] hover:scale-110 font-semibold'>LOGIN</h2>
                  </Link>
                </ul>
                <ul>
                  <Link to='/signup'>
                    <h2 className='navbuttons text-[18px] hover:scale-110 font-semibold'>SIGNUP</h2>
                  </Link>
                </ul>
              </>
            )}
          </nav>

          <div className='w-full flex justify-center'>
            <div className="searchh w-full flex justify-center items-center">
                <input placeholder="Search by city"
                class="search__input" 
                type="text" 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                />
                <button className ="search__button" onClick={handleSearch} >
                  <img src="search.png" className='search__button w-[22px] h-[22px] '></img></button>
                  </div>
            </div>

        <div className='landingcontainer h-[100%] w-[100%] flex flex-col sm:flex-row justify-center items-center'>
          <div className='padder h-[100%] w-[100%]'>
            <div className='marginctrl flex flex-col md:flex-col items-center h-full w-full justify-between gap-[70px] sm:gap-[45px]'>
                  <h1 className='textlogo text-[52px]  md:text-[75px] text-center font-bold leading-tight tracking-wide'>Find <span className='perfect'>Perfect</span> Room.</h1>
                  <h2 className='text-[22px] sm:w-[600px] w-[360px] text-center font-medium text-gray-700'> Finding a place or offering one? Roomsley makes it simple and quick.</h2>
                  <Link to="/listings">
                  <button className="buttonn md:w-[320px] w-[300px]" title='Explore Rooms'>
                    <img src='roomicon.png' className='h-[34px]'></img>
                    <h1 className='md:text-[24px] text-[22px] font-semibold'>AVAILAIBLE ROOMS &gt;</h1>
                  </button>
                  </Link>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App