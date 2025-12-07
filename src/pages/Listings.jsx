import { useState, useEffect } from 'react'
import './Listings.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/Navbar';

const Listings = () => {
    const[image, setImage] = useState("");
    const[price, setPrice] = useState("");
    const[name, setName] = useState("");
    const[contact, setContact] = useState("");
    const[location, setLocation] = useState("");
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

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

  if (!image || !price || !name || !contact || !location) {
    toast.error("Fill all details!");
    return;
  }

  try{
    const formData = new FormData();
      formData.append("image", image);
      formData.append("price", price);
      formData.append("name", name);
      formData.append("contact", contact);
      formData.append("location", location);

    console.log({ image, price, name, contact, location });

    const response = await fetch("https://roomsleybackend.onrender.com/api/auth/listings", {
      method:"POST",
      body:formData,
  })

    const result = await response.json();
      console.log("✅ Data sent to backend successfully:", result);

      resetForm();

      setModal(false);

       fetchListings();

       toast.success("Listing Created!")
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

    useEffect(() => {
      fetchListings();
    }, []);

    
    const fetchListings = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://roomsleybackend.onrender.com/api/auth/getlistings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

          const data = await response.json();
              setListings(data);
            } catch (error) {
              console.error("❌ Error fetching listings:", error);
            } finally {
              setLoading(false);
            }
        };

      const deleteList = async (listing) => {
        const response = await fetch("https://roomsleybackend.onrender.com/api/auth/deletelisting",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({ _id: listing._id })
        });

        if (response.ok) {
      toast.success("Listing Removed!");
      fetchListings();
      
      } else {
        toast.error("Failed to delete listing.");
      }
      };


  return (
    <>
    <ToastContainer />
    <Navbar />

      {loading &&(<div id="loader-overlay">
        <div class="leap-frog">
          <div class="leap-frog__dot"></div>
          <div class="leap-frog__dot"></div>
          <div class="leap-frog__dot"></div>
        </div>
      </div>)}

    <div className='listings w-full h-[110px] flex justify-center items-center text-[32px]'>
        <h1 className='text-gray-800 font-semibold'>ROOMS</h1>
    </div>

    <div className='add w-full h-[60px] flex justify-center items-center'>
    <button className='bg-gray-800 w-[180px] h-[50px] text-[22px] rounded-md hover:scale-110 cursor-pointer text-white' onClick={toggleModal}>ADD LISTING +</button>
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
        {listings.map((listing, index) => (
          <div key={index} className="addrooms h-[600px] w-[350px] sm:h-[650px] sm:w-[400px] rounded-xl overflow-clip">
            <div className='h-[65%] overflow-clip'>
              
              <img 
                src={listing.image}
                alt="Image not availaible" 
                className='addrooms rounded-t-xl object-cover w-full h-full'
              />
            </div>
            <div className='addroomdetails h-[35%] flex flex-col justify-center gap-[16px] bg-gray-50 rounded-b-xl'>
              <h1><span className='font-semibold'>Rent/month :&nbsp;</span>₹{listing.price}</h1>
              <h1><span className='font-semibold'>Name :&nbsp;</span>{listing.name}</h1>
              <h1><span className='font-semibold'>Contact :&nbsp;</span>{listing.contact}</h1>
              <h1><span className='font-semibold'>Location :&nbsp;</span>{listing.location}
              <img src="remove.png" className='remove h-[32px] w-[32px] z-[2] cursor-pointer' onClick={() => deleteList(listing)}></img></h1>
              </div>
          </div>
        ))}
    </div>
    <div className='spacer'>
    </div>
    </>
  )
}

export default Listings
