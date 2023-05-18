import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
      <div className="navbar bg-cyan-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-info lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content  shadow bg-cyan-600  mt-3 w-52 text-white">
              <li ><Link to={"/"}>Home</Link></li>
              <li tabIndex={0}>
                <Link to={"/alltoys"}>All Toys</Link>

              </li>
              <li><Link to={"/mytoys"}>My Toys</Link></li>
              <li><Link to={"/addtoy"}>Add A Toy</Link></li>
              <li className='pb-2'><Link>Blogs</Link></li>
            </ul>
          </div>
          <img className='lg:w-1/3 w-3/4 p-4' src="https://i.ibb.co/7v52Ls3/logo3.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to={"/"} className='text-white'>Home</NavLink></li>

            <li>
              <Link to={"/alltoys"} className='text-white'>All Toys</Link>
            </li>
            <li>
              <Link to={"/mytoys"} className='text-white'>My Toys</Link>
            </li>
            <li>
              <NavLink to={"/addtoy"} className='text-white'>Add A Toy</NavLink>
              <NavLink to={"/blog"} className='text-white'>Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end pe-4">
          <Link to={"/login"} className="bg-transparent hover:bg-gray-600 text-white font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded">Login</Link>
        </div>
      </div>
      <div className='w-full h-1 bg-orange-600'></div>
    </div>
  );
};

export default NavigationBar;