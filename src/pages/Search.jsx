import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div>
        <nav className="h-[68px] w-full flex justify-start items-center gap-[8px] bg-gray-800 text-[22px]">
        <img src='door.png' className='homeicon h-[35px]'></img>
        <Link to='/'><h1 className='text-white'>Roomsley</h1></Link>
        </nav>
    </div>
  )
}

export default Search