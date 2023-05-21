import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'


const WayToShop = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
    return (
        <div className='mb-5'>
            <h1 className='lg:my-10 my-3 font-bold text-4xl text-center text-orange-600' >Shop By Age</h1>

            <div className='grid lg:grid-cols-3 lg:mx-32 justify-center gap-3'>

                <div className="card card-compact w-72 bg-base-100 shadow-xl" data-aos="fade-up"
                 data-aos-duration="4000"
                    data-aos-offset="200"
                    data-aos-delay="50"

                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <figure><img src="https://i.ibb.co/0VpcWjs/kid1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h1 className='font-semibold text-2xl text-center text-cyan-500'>Age:For UpTo 2 year</h1>
                        <div className="card-actions justify-center mt-2">
                            <button className="btn bg-orange-600">Shop Here</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl "
                data-aos="fade-in"
                data-aos-duration="4000"
                   data-aos-offset="200"
                   data-aos-delay="50"

                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true"
                   data-aos-once="false"
                   data-aos-anchor-placement="top-center">
                    <figure><img src="https://i.ibb.co/PTyh4jL/kid.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h1 className='font-semibold text-2xl text-center text-cyan-500'>Age: For UpTo 5 year</h1>
                        <div className="card-actions justify-center mt-2">
                            <button className="btn bg-orange-600">Shop Here</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl" data-aos="fade-up"
                 data-aos-duration="4000"
                    data-aos-offset="200"
                    data-aos-delay="50"

                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <figure><img src="https://i.ibb.co/5Tkg3H1/kid2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h1 className='font-semibold text-2xl text-center text-cyan-500'>Age: For UpTo 10 year</h1>
                        <div className="card-actions justify-center mt-2">
                            <button className="btn bg-orange-600">Shop Here</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WayToShop;