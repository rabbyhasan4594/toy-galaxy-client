import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Login = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div>
                <div className="hero min-h-screen bg-gray-400 ">
                    <div className="hero-content flex-col lg:flex-row lg:mt-14">
                        <div className="text-center lg:text-left lg:w-1/3 lg:me-10">
                            
                            <img className='rounded-lg ' src="https://i.ibb.co/2h9ByVY/main.png" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-600">
                            <form className="card-body">
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
                                    <input type="password" 
                                    name="password"
                                    placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-orange-500"type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;