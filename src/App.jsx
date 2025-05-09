import { useState } from 'react'
import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="first h-[100%] 2-[100%]">
      <nav className="h-[68px] w-full flex justify-start items-center gap-[8px] bg-gray-800 text-[22px]">
        <img src='door.png' className='homeicon h-[35px]'></img>
        <h1 className='text-white cursor-pointer' onClick={() => window.location.reload()}>Roomsley</h1>
        </nav>

        <nav className='h-[130px] flex justify-center items-center gap-[28px] md:gap-[60px]'>
            <ul><h2 className='homebtn text-[20px] hover:scale-110 text-gray-800 font-medium' onClick={() => window.location.reload()}>Home</h2></ul>
            <ul><Link to="/login"><h2 className='text-[20px] hover:scale-110 text-gray-800 font-medium'>Log in</h2></Link></ul>
            <ul><Link to='/signup'><h2 className='text-[20px] hover:scale-110 text-gray-800 font-medium'>Sign up</h2></Link></ul>
          </nav>

        <div className='landingcontainer h-[100%] w-[100%] flex flex-col sm:flex-row justify-center items-center'>
          <div className='padder h-[100%] w-[100%]'>

          <div className='marginctrl flex flex-col md:flex-row h-full w-full justify-between gap-[30px]'>
              <div className=''>
                  <h1 className='textlogo text-[60px] md:text-[90px] font-semibold leading-tight'>Find Perfect<br />Room.</h1>
                  <Link to="/listings">
                  <buttonn className="buttonn w-[160px]">
                  <img src='roomicon.png' className='h-[34px]'></img>
                  <h1 className='text-[25px]'>ROOMS</h1>
                  </buttonn>
                  </Link>
              </div>

              <div>
                <img src='roomimg.jpg' className='roomimg object-cover h-[580px] sm:h-[650px] w-[600px] z-[-1] relative top-[0px]'></img>
              </div>
             </div>
          </div>
        </div>
      </div>

      <div className='second flex flex-col gap-[120px]'>
        <h1 className='services text-[40px] text-center text font-semibold text-gray-800'>SERVICES</h1>

        <div className='findrooms flex flex-col sm:flex-row gap-[50px] w-full rounded-[15px] shadow-md shadow-gray-800'>
          <img src='dispimg.jpg' className='h-[235px] w-[235px] rounded-[15px]'></img>

          <div className='flex flex-col gap-[35px]'>
            <h1 className='text-[32px] text-gray-800 font-medium'>FIND ROOMS</h1>
            <p className='text-[18px]'>We help you explore a wide range of verified rental options tailored to your needs-whether you're a student, working professional, or just moving to a new city.

            Filter by location, budget, amenities, and more to discover the perfect space that feels like home. Say goodbye to endless searching and shady listings-every room listed is pre-checked to ensure safety, affordability, and comfort.

              Just pick your vibe, and let us handle the rest.</p>
          </div>
        </div>

        <div className="listrooms flex flex-col sm:flex-row gap-[50px] w-full rounded-[15px] shadow-md shadow-gray-800">
          <img src='dispimg2.jpg' className='h-[235px] w-[235px] rounded-[15px]'></img>
          <div className='flex flex-col gap-[35px]'>
            <h1 className='text-[32px] text-gray-800 font-medium'>LIST YOUR ROOM</h1>
            <p className='text-[18px]'>Got a spare room or property? Turn it into easy income by listing it on our platform. With our List Your Room service, you can connect directly with people looking for a place-no middlemen, no broker fees.

              Creating a listing is super simple: add photos, set your price, write a short description, and you're good to go. We help your space get seen by genuine tenants so you can rent it out faster and safer.

              Whether it's a shared room, a studio, or a full apartment-we’ll help you find the right renter, stress-free.</p>
          </div>
        </div>

        <div className="easydeal flex flex-col sm:flex-row gap-[50px] w-full rounded-[15px] shadow-md shadow-gray-800">
          <img src='dispimg3.jpg' className='h-[235px] w-[235px] rounded-[15px]'></img>
          <div className='flex flex-col gap-[35px]'>
            <h1 className='text-[32px] text-gray-800 font-medium'>EASY DEAL</h1>
            <p className='text-[18px]'>Renting shouldn’t be a headache, and with our Easy Deal service, it’s not. We simplify the whole renting process by helping both tenants and owners with quick, clear, and secure rental agreements.

              No legal confusion, no paperwork mess-just a smooth digital process that saves you time and keeps everything official. From rent terms to move-in dates, everything’s handled in a transparent and hassle-free way.

              Renting a room or listing one? We make the deal easy, fair, and fast.</p>
          </div>
        </div>
      </div>

      <div className='footer bottom-0 h-[30px] w-full flex justify-center items-center text-gray-600 font-medium' style={{ backgroundColor:"white" }}>
          <h5>RoomsRentley</h5>
      </div>
    </>
  );
}

export default App