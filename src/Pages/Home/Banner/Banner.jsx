import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/P10LgK5/DEFENDER-BANNER-NEW-1-3600-x-1125-2000x625.webp" className="w-full static" />
                    <div className='absolute lg:top-44 lg:left-40 top-5 left-24'>
                        <h1 className='text-white lg:text-4xl lg:w-1/3 w-2/3 '>Rev up the fun and explore a galaxy of car toys at Toy Galaxy</h1>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 lg:px-6 px-4 rounded lg:mt-6 mt-2">
                            Shop Now
                        </button>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="bg-transparent  text-white font-semibold hover: py-2 px-4 lg:px-7  lg:text-4xl">❮</a>
                        <a href="#slide2" className="bg-transparent  text-white font-semibold hover: py-2 px-4 lg:px-7  lg:text-4xl">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qsNtQMJ/stock-photo-toy-car-gift-box-pink.jpg" className="w-full static" />
                    <div className='absolute lg:top-44 lg:left-40 top-5 left-24'>
                        <h1 className='text-gray-800 lg:text-4xl lg:w-1/3 w-2/3 '>Rev up the fun and explore a galaxy of car toys at Toy Galaxy</h1>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 lg:px-6 px-4 rounded lg:mt-6 mt-2">
                            Button
                        </button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="bg-transparent  text-cyan-600 font-semibold hover: py-2 px-4 lg:px-7 lg:text-4xl">❮</a>
                        <a href="#slide3" className="bg-transparent  text-cyan-600 font-semibold hover: py-2 px-4 lg:px-7  lg:text-4xl">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/GpF10zL/Blue-toy-car-right-blue-background-banner-2400x706-1-1024x301.webp" className="w-full static" />
                    <div className='absolute lg:top-44 lg:left-40 top-5 left-24'>
                        <h1 className='text-white lg:text-4xl lg:w-1/3 w-2/3 '>Rev up the fun and explore a galaxy of car toys at Toy Galaxy</h1>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 lg:px-6 px-4 rounded lg:mt-6 mt-2">
                        Shop Now
                        </button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="bg-transparent  text-white font-semibold hover: py-2 px-4 lg:px-7 lg:text-4xl">❮</a>
                        <a href="#slide4" className="bg-transparent  text-white font-semibold hover: py-2 px-4 lg:px-7 lg:text-4xl">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ZW1dXcN/car5.jpg" className="w-full static" />
                    <div className='absolute lg:top-44 lg:left-40 top-5 left-24'>
                        <h1 className='text-gray-800 lg:text-4xl lg:w-1/3 w-2/3 '>Rev up the fun and explore a galaxy of car toys at Toy Galaxy</h1>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 lg:px-6 px-4 rounded lg:mt-6 mt-2">
                        Shop Now
                        </button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="bg-transparent  text-cyan-600 font-semibold hover: py-2 px-4 lg:px-7 lg:text-4xl">❮</a>
                        <a href="#slide1" className="bg-transparent  text-cyan-600 font-semibold hover: py-2 px-4 lg:px-7 lg:text-4xl">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;