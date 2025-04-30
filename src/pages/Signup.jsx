import React from 'react'
import './Signup.css'
import {Link, useNavigate} from "react-router-dom"
import {useState} from 'react' 


const Signup = () => {

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
      const response = await fetch("http://localhost:3040/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });


      const data = await response.json();
      alert(data.message);
      navigate('/login');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <nav className="h-[68px] w-full flex justify-start items-center gap-[8px] bg-gray-800 text-[22px]">
        <img src='door.png' className='homeicon h-[35px]'></img>
        <Link to='/'><h1 className='text-white'>Roomsley</h1></Link>
        </nav>

    <div className="wrapper">
    <div className="container c1 w-[320px] md:w-[400px]">
      <h1 className="text-[30px]" style={{ color: "rgba(70, 131, 180, 0.902)" }}>Sign Up</h1>
      <br /><br /><br /><br />
      
      <form className='text-center text-[16px]' onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br /><br />
        <input
          type="text"
          id="username"
          className='border'
          name='username'
          value={user.username}
          onChange={handleChange}
          required
        />
        <br /><br /><br />

        <label htmlFor="password">Password:</label><br /><br />
        <input
          type="password"
          id="password"
          className='border'
          name='password'
          value={user.password}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit" className='text-[22px] hover:scale-110' style={{ color: "rgba(70, 131, 180, 0.902)" }}>Sign Up</button>
      </form>
    </div>
    </div>
  </>
  )
}
export default Signup