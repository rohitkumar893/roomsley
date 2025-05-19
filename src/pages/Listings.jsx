import React from 'react'
import { useState } from 'react'
import './Listings.css'
import { Link } from 'react-router-dom'

const Listings = () => {
    const[image, setImage] = useState("");
    const[price, setPrice] = useState("");
    const[name, setName] = useState("");
    const[contact, setContact] = useState("");
    const[location, setLocation] = useState("");

    const handleImage = (e) => {
      setImage(e.target.files[0]);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleContact = (e) => {
        setContact(e.target.value)
    }

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

const handleSubmit = (e) => {
  e.preventDefault();
  console.log({ image, price, name, contact, location });
  setModal(false);
};

  const[modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal (!modal);
  }

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
    {/* <Link to='/addlisting'> */}
    <button className='bg-gray-800 w-[180px] h-[50px] text-[22px] rounded-md hover:scale-110 cursor-pointer text-white' onClick={toggleModal}>ADD LISTING +</button>
    {/* </Link> */}
    </div>

    {modal && (<div className="modal">
        <div className="overlay" onClick={toggleModal}></div>
        <div className="contentmodal flex justify-center items-center min-h-[96vh]" onClick={(e) => e.stopPropagation()}>
        <div className="formcontainer sm:w-[400px] sm:h-[560px] w-[320px] h-[580px] rounded-xl">
                <h1 className="text-center text-[25px] font-small text-gray-800 font-medium">ADD YOUR DETAILS</h1>
                <form className="form flex flex-col gap-[10px]" onSubmit={handleSubmit}>
                    <label htmlFor="image">Add Room Image</label>
                    <input type="file" id='image' className="inputimage border rounded" onChange={handleImage}></input>
                    <label htmlFor='price'>Price : </label>
                    <input type='number' id='price' className="border rounded" value={price} onChange={handlePrice}></input>
                    <label htmlFor='name'>Name : </label>
                    <input type='text' id='name' className="border rounded" value={name} onChange={handleName}></input>
                    <label htmlFor='contact'>Contact Number : </label>
                    <input type='tel' id='contact' className="border rounded" value={contact} onChange={handleContact}></input>
                    <label htmlFor='location'>Location : </label>
                    <input type='text' id='location' className="border rounded" value={location} onChange={handleLocation}></input>
                    <button className="text-[20px] text-blue-600 font-medium" style={{marginTop:'10px'}}>SUBMIT</button>
                    </form>
                </div>
        </div>
      </div>)}
    
    <div className="container3">
        <div class="div1">
        </div>
        <div className="div1"></div>
        <div className="div1"></div>
        <div className="div1"></div>
        <div className="div1"></div>
        <div className="div1"></div>
        <div className="div1"></div>
        <div className="div1"></div>
        <div className="div1"></div>
    </div>
    </>
  )
}

export default Listings
