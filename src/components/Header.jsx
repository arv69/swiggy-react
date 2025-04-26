import React from 'react'
import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';

const Header = () => {
  const [btnName, setbtnName] = useState('Login');
  console.log("Header rendered");
    return (
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className='login' onClick={()=>{setbtnName(btnName === 'Login' ? 'Logout' : 'Login')}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header