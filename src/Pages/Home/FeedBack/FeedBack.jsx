import React from 'react';
import Swal from 'sweetalert2';

import { useForm } from 'react-hook-form';

const FeedBack = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {


              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Added Successfully',
                showConfirmButton: false,
                timer: 1500
              })
    
    }
    return (
        <div>

            <div className='lg:bg-slate-300 bg-slate-500 lg:p-4 p-5'>
                <div className='bg-cyan-600 lg:w-1/3 lg:mx-96 py-5 rounded-lg'>
                    <h1 className='text-center text-2xl mb-4 text-white'>Please Give Us FeedBack</h1>
                    <form className='grid grid-cols-1 text-center' onSubmit={handleSubmit(onSubmit)}>

                        <div className=''>
                            <div className='mb-2'>
                                <input
                                    className="text-input px-10 py-2 rounded-lg h-20"
                                    {...register("feedback", { required: true })}
                                    placeholder="Feedback Please"
                                    type="text"
                                />
                            </div>


                            <div className='pt-2'>
                                <input className="btn text-white bg-orange-600" value="FeedBack" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;