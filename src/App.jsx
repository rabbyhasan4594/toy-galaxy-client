import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, NavLink } from 'react-router-dom'

function App() {
 

  return (
    <div>
        <div className="navbar bg-cyan-600">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-info lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content  shadow bg-cyan-600  mt-3 w-52 text-white">
        <li ><Link>Home</Link></li>
        <li tabIndex={0}>
        <Link>All Toys</Link>
          
        </li>
        <li><Link>My Toys</Link></li>
        <li><Link>Add A Toy</Link></li>
        <li className='pb-2'><Link>Blogs</Link></li>
      </ul>
    </div>
    <img className='lg:w-1/3 w-3/4 p-4' src="https://i.ibb.co/7v52Ls3/logo3.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link className='text-white'>Home</Link></li>
      
      <li>
       <Link className='text-white'>All Toys</Link>
      </li>
      <li>
       <Link className='text-white'>My Toys</Link>
      </li>
      <li>
       <Link className='text-white'>Add A Toy</Link>
       <Link className='text-white'>Blogs</Link>
      </li>
      </ul>
  </div>
  <div className="navbar-end pe-4">
    <a className="bg-transparent hover:bg-gray-600 text-white font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded">Login</a>
  </div>
</div>
    </div>
  )
}

export default App
