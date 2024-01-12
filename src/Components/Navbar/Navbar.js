import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  

  const handleLogout = () => {
    localStorage.removeItem('auth'); 
    window.location.href = '/';
  };

  return (
    <nav>
        <div className='logo'>
            <h1>Resorts</h1>
        </div>
        <div className='menu' >
            <Link to='/home' className='menu-text'>Home</Link>
            <Link to='/resorts' className='menu-text'>Resorts</Link>
            <Link to='/bookings' className='menu-text'>Booking</Link>
            <button onClick={handleLogout}>LogOut</button>
        </div> 
    </nav>
  )

};
export default Navbar;