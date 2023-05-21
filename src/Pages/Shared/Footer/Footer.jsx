import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-cyan-700 text-base-content">
  <div>
    <img className='w-1/3' src="https://i.ibb.co/7v52Ls3/logo3.png" alt="" />
    <p className='text-white'>Toy Galaxy Ltd.<br/>Providing best toy car since 2020.
    <br />Copyright © 2023 Toy Galaxy. All rights reserved.</p>
  </div> 
  <div className='text-white'>
    <span className="text-black font-bold">Sub-category</span> 
    <span className="">Sports Car</span> 
    <span className="">Truck</span> 
    <span className="">Police Car</span> 
    
  </div> 
  <div className='text-white'>
    <span className="text-black font-bold text-center">About</span>
    <span className="">Phone:0174000000</span> 
    <span className="">Email:rabby@gmail.com</span>  
 
  </div> 
  
</footer>
        </div>
    );
};

export default Footer;