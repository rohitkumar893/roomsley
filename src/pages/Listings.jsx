import React from 'react'
import './Listings.css'
import { Link } from 'react-router-dom'

const Listings = () => {
  return (
    <>
    <nav className="h-[68px] w-full flex justify-start items-center gap-[8px] bg-gray-800 text-[22px]">
        <img src='door.png' className='homeicon h-[35px]'></img>
        <Link to='/'><h1 className='text-white'>Roomsley</h1></Link>
        </nav>

    <div className='listings w-full h-[140px] flex justify-center items-center text-[32px]'>
        <h1 className='text-gray-800 font-semibold'>ROOMS</h1>
    </div>

    <div className='add w-full h-[60px] flex justify-center items-center'>
    <Link to='/addlisting'>
    <button className='bg-gray-800 w-[180px] h-[50px] text-[22px] rounded-md hover:scale-110 cursor-pointer'>ADD LISTING +</button>
    </Link>
    </div>
    
    <div class="container3">
        <div class="div1">
        </div>
        <div class="div1"></div>
        <div class="div1"></div>
        <div class="div1"></div>
        <div class="div1"></div>
        <div class="div1"></div>
        <div class="div1"></div>
        <div class="div1"></div>
        <div class="div1"></div>
    </div>
    </>
  )
}

export default Listings
