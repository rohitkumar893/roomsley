import React, { useState } from 'react'
import './Login.css'
import {Link, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/Navbar';


const Login = () => {
      const [user, setUser] = useState({
      username: '',
      password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("https://roomsleybackend.onrender.com/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        });
  
        const data = await response.json();
        if (response.ok) {
          toast.success(data.message || "Login successful!");
          localStorage.setItem("isLoggedIn", "true");
          window.dispatchEvent(new Event("storage"));
          navigate("/");
        } else {
          toast.error(data.message || "Invalid username or password");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    };

  return (
    <>
    <ToastContainer />
    <Navbar />

    <div className="wrapper">
    <div className="container c1 w-[320px] md:w-[400px]">
      <h1 className="text-[30px]" style={{ color: "rgba(70, 131, 180, 0.902)" }}>Log In</h1>
      <br /><br /><br /><br />
      
      <form onSubmit={handleSubmit} className='text-center text-[16px]'>
        <label htmlFor="name">Username:</label><br /><br />
        <input
          type="text"
          id="name"
          name="username"
          className='border'
          value={user.username}
          onChange={handleChange}
        />
        <br /><br /><br />

        <label htmlFor="password">Password:</label><br /><br />
        <input
          type="password"
          id="password"
          name="password"
          className='border'
          value={user.password}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit" className='text-[22px] hover:scale-110' style={{ color: "rgba(70, 131, 180, 0.902)" }}>Log In</button>
      </form>
    </div>
    </div>
  </>
  )
}
export default Login