import React, { useState } from "react";
import './Addlisting.css'
import { Link } from "react-router-dom";
import Listings from "./Listings";

const Addlisting = () => {

    const[image, setImage] = useState("");
    const[price, setPrice] = useState("");
    const[name, setName] = useState("");
    const[contact, setContact] = useState("");
    const[location, setLocation] = useState("");

    const handleImage = (e) => {
        setImage(e.target.value)
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

    const handleSubmit = async () => {
        try {
            const f = await fetch("localhost://3010");
            method:'POST';
        }
        catch (err){
            console.log("Error",err)
        }
    }


    return(
        <>
        <nav className="h-[68px] w-full flex justify-start items-center gap-[8px] bg-gray-800 text-[22px]">
        <img src='door.png' className='homeicon h-[35px]'></img>
        <Link to='/'><h1 className='text-white'>Roomsley</h1></Link>
        </nav>

            <div className="addlistingcontainer flex flex-col justify-center items-center min-h-[90vh]">
                <div className="formcontainer w-[400px] h-[560px] rounded-xl">
                <h1 className="text-center text-[25px] font-small text-gray-800 font-medium">ADD YOUR DETAILS</h1>
                <form onSubmit={handleSubmit} className="form flex flex-col gap-[10px]">
                    <label htmlFor="image">Add Room Image</label>
                    <input type="file" id='image' className="inputimage border rounded" value={image} onChange={handleImage}></input>
                    <label htmlFor='price'>Price : </label>
                    <input type='number' id='price' className="border rounded" value={price} onChange={handlePrice}></input>
                    <label htmlFor='name'>Name : </label>
                    <input type='text' id='name' className="border rounded" value={name} onChange={handleName}></input>
                    <label htmlFor='contact'>Contact Number : </label>
                    <input type='number' id='contact' className="border rounded" value={contact} onChange={handleContact}></input>
                    <label htmlFor='location'>Location : </label>
                    <input type='text' id='location' className="border rounded" value={location} onChange={handleLocation}></input>
                    <button className="text-[20px] text-blue-600 font-medium" style={{marginTop:'10px'}}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addlisting