import React, { useState } from 'react'
import './Login.css'
import {Link, useNavigate} from "react-router-dom"


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
        const response = await fetch("http://localhost:3040/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        });
  
        const data = await response.json();
        alert(data.message);
        navigate('/');
      } catch (error) {
        console.error("Error:", error);
      }
    };

  return (
    <>
    <nav className="h-[68px] w-full flex justify-start items-center gap-[8px] bg-gray-800 text-[22px]">
        <img src='door.png' className='homeicon h-[35px]'></img>
        <Link to='/'><h1 className='text-white'>RoomsRentley</h1></Link>
        </nav>

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