import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Listings from './pages/Listings.jsx'
import Signup from './pages/Signup.jsx'
import Addlisting from './pages/Addlisting.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addlisting" element={<Addlisting />} />
    </Routes>
  </BrowserRouter>
)