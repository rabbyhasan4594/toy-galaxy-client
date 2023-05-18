import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Register = () => {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div className="hero min-h-screen bg-gray-400 ">
                    <div className="hero-content flex-col lg:flex-row lg:mt-14">
                        <div className="text-center lg:text-left lg:w-1/2">
                            
                            <img className='rounded-lg ' src="https://i.ibb.co/JjXTNgc/register-01.png" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-600 lg:me-20">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                    name="name" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                    name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" 
                                    name="photoURL"
                                    placeholder="photoURL" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" 
                                    name="password"
                                    placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-orange-500"type="submit" value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
      </div>
    );
};

export default Register;