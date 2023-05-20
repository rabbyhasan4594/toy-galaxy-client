import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }
  return (
    <div>
      <div className="navbar bg-cyan-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-info lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content  shadow bg-cyan-600  mt-3 w-52 text-white">
              {
                user ? <div>
                  <li ><NavLink to={"/"}>Home</NavLink></li>
                  <li tabIndex={0}>
                    <NavLink to={"/allToys"}>All Toys</NavLink>
                  </li>
                  <li><NavLink to={"/myToys"}>My Toys</NavLink></li>
                  <li><NavLink to={"/addAToy"}>Add A Toy</NavLink></li>
                  <li><NavLink to={"/blog"}>Blogs</NavLink></li>
                </div> : <div>
                  <li ><NavLink to={"/"}>Home</NavLink></li>
                  <li tabIndex={0}>
                    <NavLink to={"/allToys"}>All Toys</NavLink>
                  </li>
                  <li><NavLink to={"/blog"}>Blogs</NavLink></li>
                  
                </div>

              }
            </ul>
          </div>
          <img className='lg:w-1/3 w-3/4 p-4' src="https://i.ibb.co/7v52Ls3/logo3.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">


            {
              user ? <div>
                <ul className="menu menu-horizontal px-1">
                  <li><NavLink to={"/"} className='text-white'>Home</NavLink></li>
                  <li>
                    <NavLink to={"/allToys"} className='text-white'>All Toys</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/myToys"} className='text-white'>My Toys</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/addAToy"} className='text-white'>Add A Toy</NavLink>
                    <NavLink to={"/blog"} className='text-white'>Blogs</NavLink>
                  </li>
                </ul>
              </div> :
                <div>
                  <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={"/"} className='text-white'>Home</NavLink></li>
                    <li>
                      <NavLink to={"/allToys"} className='text-white'>All Toys</NavLink>
                    </li>
                    <li><NavLink to={"/blog"} className='text-white'>Blogs</NavLink></li>
                  </ul>
                </div>
            }
          </ul>
        </div>
        <div className="navbar-end pe-4">
          <div>
            {
              user ? <div className='flex justify-center items-center gap-3'>
                <img style={{ height: "40px", weight: "40px " }} src={user.photoURL} alt="" className='rounded-md ' />

                <NavLink onClick={handleLogOut} to={"/login"} className="bg-transparent hover:bg-gray-600 text-white font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded">LogOut</NavLink>

              </div> : <NavLink to={"/login"} className="bg-transparent hover:bg-gray-600 text-white font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded">Login</NavLink>

            }
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className='w-full h-1 bg-orange-600'></div>
    </div>
  );
};

export default NavigationBar;