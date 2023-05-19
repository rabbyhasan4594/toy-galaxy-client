import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-cyan-700 text-base-content">
  <div>
    <img className='w-1/3' src="https://i.ibb.co/7v52Ls3/logo3.png" alt="" />
    <p className='text-white'>Toy Galaxy Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div className='text-white'>
    <span className="">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div className='text-white'>
    <span className=" ">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='text-white'>
    <span className="">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;