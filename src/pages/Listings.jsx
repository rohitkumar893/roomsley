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

const handleSubmit = async (e) => {
  e.preventDefault();

  try{
    const formData = new FormData();
      formData.append("image", image);
      formData.append("price", price);
      formData.append("name", name);
      formData.append("contact", contact);
      formData.append("location", location);

    console.log({ image, price, name, contact, location });

    const response = await fetch("http://localhost:3040/api/auth/listings", {
      method:"POST",
      body:formData,
  })

    const result = await response.json();
      console.log("✅ Data sent to backend successfully:", result);

      resetForm();

      setModal(false);
  }

  catch (error) {
    console.error("❌ Error sending data:", error);
  }
};

      const resetForm = () => {
        setImage("");
        setPrice("");
        setName("");
        setContact("");
        setLocation("");
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

    <div className='listings w-full h-[110px] flex justify-center items-center text-[32px]'>
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
        <div className="formcontainer sm:w-[400px] sm:h-[560px] w-[320px] h-[590px] rounded-xl">
                <h1 className="text-center text-[22px] font-small text-gray-800 font-medium">ADD YOUR DETAILS</h1>
                <form className="form flex flex-col gap-[10px]" onSubmit={handleSubmit}>
                    <label htmlFor="image">Add Room Image : </label>
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
        <div className="demoroom h-[500px] w-[320px] sm:h-[500px] sm:w-[400px] border rounded-xl">
          <div className='h-[65%]'><img src="/demoroom.jpg" className='rounded-xl'/></div>
          <div className='demoroomdetails h-[35%] flex flex-col justify-center gap-[4px] bg-gray-50 rounded-xl'>
            <h1><span className='font-semibold text-center'>'DEMO ROOM'</span></h1>
            <h1><span className='font-semibold'>Rent/month :&nbsp;</span>10,000</h1>
            <h1><span className='font-semibold'>Name :&nbsp;</span>Rohit</h1>
            <h1><span className='font-semibold'>Contact :&nbsp;</span>9876598765</h1>
            <h1><span className='font-semibold'>Location :&nbsp;</span>Mohali</h1>
          </div>
        </div>

        <div className="div1">
        </div>
    </div>
    </>
  )
}

export default Listings
