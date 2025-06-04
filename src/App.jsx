import { useState } from 'react'
import { useGSAP }  from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  const loginStatus = localStorage.getItem("isLoggedIn");
  setIsLoggedIn(loginStatus === "true");
}, []);

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  setIsLoggedIn(false);
  toast.info("Logged out!");
};

  useGSAP(() => {
    gsap.from(".services",{
      opacity:0,
      duration: 1,
      scrollTrigger:{
        trigger:".services",
        start: "top 85%"
      }
    })

    gsap.from(".findrooms",{
      opacity:0,
      x:40,
      duration: 1,
      scrollTrigger:{
        trigger:".findrooms",
        start: "top 73%"
      }
    })

    gsap.from(".listrooms",{
      x:-40,
      opacity:0,
      duration: 1,
      scrollTrigger:{
        trigger:".listrooms",
        start: "top 73%"
      }
    })

    gsap.from(".easydeal",{
      x:40,
      opacity:0,
      duration: 1,
      scrollTrigger:{
        trigger:".easydeal",
        start: "top 73%"
      }
    })
  })

  return (
    <>
      <div className="first w-[100%]">
      <nav className="h-[68px] w-full flex justify-between items-center bg-gray-800 text-[22px] z-50">
        <div className='w-full flex justify-start items-center gap-[8px]'>
          <img src='door.png' className='homeicon h-[35px]'></img>
          <h1 className='text-white cursor-pointer' onClick={() => window.location.reload()}>Roomsley</h1>
        </div>

        <Link to='/about' className='about'>
        <img src='about.png' title="About" className='object-fill sm:h-[35px] sm:w-[35px] h-[35px] w-[32px] hover:scale-110'></img>
        </Link>
        </nav>

        <nav className='h-[115px] flex justify-center items-center gap-[42px] md:gap-[122px]'>
          <ul>
          <h2 className='homebtn text-[18px] hover:scale-110 text-gray-800 font-semibold' onClick={() => window.location.reload()}>HOME</h2>
          </ul>
            {isLoggedIn ? (
              <ul>
                <h2
                  onClick={handleLogout}
                  className='cursor-pointer text-[18px] hover:scale-110 text-gray-800 font-semibold'
                >
                  LOGOUT
                </h2>
              </ul>
            ) : (
              <>
                <ul>
                  <Link to="/login">
                    <h2 className='text-[18px] hover:scale-110 text-gray-800 font-semibold'>LOGIN</h2>
                  </Link>
                </ul>
                <ul>
                  <Link to='/signup'>
                    <h2 className='text-[18px] hover:scale-110 text-gray-800 font-semibold'>SIGNUP</h2>
                  </Link>
                </ul>
              </>
            )}
          </nav>

        <div className='landingcontainer h-[100%] w-[100%] flex flex-col sm:flex-row justify-center items-center'>
          <div className='padder h-[100%] w-[100%]'>
            <div className='marginctrl flex flex-col md:flex-row h-full w-full justify-between gap-[45px]'>
              <div className='flex flex-col gap-[28px] sm:gap-[34px]'>
                  <h1 className='textlogo text-[52px] w-[300px] md:text-[60px] font-bold leading-tight tracking-wide'>Find Perfect<br />Room<span className='animate-pulse'>.</span></h1>
                  <h2 className='text-[18px] sm:w-[410px] w-[360px] font-medium text-gray-700'> Finding a place or offering one? <br /> Roomsley makes it simple and quick.</h2>
                  <Link to="/listings">
                  <button className="buttonn w-[180px]" title='Explore Rooms'>
                  <img src='roomicon.png' className='h-[34px]'></img>
                  <h1 className='text-[25px] font-semibold'>EXPLORE</h1>
                  </button>
                  </Link>
              </div>

              <div>
                <img src='roomimg.jpg' className='roomimg h-[580px] w-[580px] sm:h-[600px] sm:w-[600px] rounded-md'></img>
              </div>
             </div>
          </div>
        </div>
      </div>

      

      <div className='second flex flex-col gap-[100px]'>
        <img src="divider.png" className='divider w-[500px] h-[20px]'></img>
        <h1 className='services rounded-xl text-[35px] sm:text-[40px] text-center text font-semibold text-white bg-gray-800 z-5'>SERVICES</h1>

        <div className='findrooms flex flex-col sm:flex-row gap-[50px] w-full rounded-[15px] shadow-lg shadow-gray-600'>
          <img src='dispimg.jpg' className='sm:h-[235px] sm:w-[235px] h-full w-full rounded-[15px]'></img>

          <div className='flex flex-col sm:gap-[35px] gap-[25px]'>
            <h1 className='smry1 text-[28px] text-gray-800 font-medium'>FIND ROOMS</h1>
            <p className='sm:text-[18px] text-[15px]'>We help you explore a wide range of verified rental options tailored to your needs-whether you're a student, working professional, or just moving to a new city.
              Filter by location, budget, amenities, and more to discover the perfect space that feels like home. Say goodbye to endless searching and shady listings-every room listed is pre-checked to ensure safety, affordability, and comfort.
              Just pick your vibe, and let us handle the rest.</p>
          </div>
        </div>

        <div className="listrooms flex flex-col sm:flex-row gap-[50px] w-full rounded-[15px] shadow-lg shadow-gray-600">
          <img src='dispimg2.jpg' className='sm:h-[235px] sm:w-[235px] h-full w-full rounded-[15px]'></img>
          <div className='flex flex-col sm:gap-[35px] gap-[25px]'>
            <h1 className='smry2 text-[28px] text-gray-800 font-medium'>LIST YOUR ROOM</h1>
            <p className='sm:text-[18px] text-[15px]'>Got a spare room or property? Turn it into easy income by listing it on our platform. With our List Your Room service, you can connect directly with people looking for a place-no middlemen, no broker fees.
              Creating a listing is super simple: add photos, set your price, write a short description, and you're good to go. We help your space get seen by genuine tenants so you can rent it out faster and safer.
              Whether it's a shared room, a studio, or a full apartment-we’ll help you find the right renter, stress-free.</p>
          </div>
        </div>

        <div className="easydeal flex flex-col sm:flex-row gap-[50px] w-full rounded-[15px] shadow-lg shadow-gray-600">
          <img src='dispimg3.jpg' className='sm:h-[235px] sm:w-[235px] h-full w-full rounded-[15px]'></img>
          <div className='flex flex-col sm:gap-[35px] gap-[25px]'>
            <h1 className='smry3 text-[28px] text-gray-800 font-medium'>EASY DEAL</h1>
            <p className='sm:text-[18px] text-[15px]'>Renting shouldn’t be a headache, and with our Easy Deal service, it’s not. We simplify the whole renting process by helping both tenants and owners with quick, clear, and secure rental agreements.
              No legal confusion, no paperwork mess-just a smooth digital process that saves you time and keeps everything official. From rent terms to move-in dates, everything’s handled in a transparent and hassle-free way.
              Renting a room or listing one? We make the deal easy, fair, and fast.</p>
          </div>
        </div>
      </div>

      <div className='footer h-[36px] w-full flex justify-center items-center text-gray-600 font-medium' style={{ backgroundColor:"white" }}>
          <h5>Roomsley · 2025</h5>
      </div>
    </>
  );
}

export default App