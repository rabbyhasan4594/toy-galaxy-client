import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Swal from 'sweetalert2';

const UpdateToyModal = () => {

    const updateToy = useLoaderData();
     console.log(updateToy);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleToyUpdate = (data) => {
        console.log(data);

        fetch(`http://localhost:5000/updateToy/${data._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Update Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                console.log(result);
            });


    };
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='bg-slate-500 lg:p-14 p-5'>
                <div className='bg-cyan-600 lg:w-1/3 lg:mx-96 py-5 rounded-lg'>
                    <h1 className='text-center text-2xl mb-4 text-white'>Add Toys</h1>
            <form className='grid grid-cols-1 text-center' onSubmit={handleSubmit(handleToyUpdate)} >

                <div className=''>
                    <div className='mb-2'>
                        <h1>Price</h1>
                        <input
                            className="text-input px-4 py-2 rounded-lg"
                            {...register("price", { required: true })}
                            placeholder="Price"
                            type="number"
                            defaultValue={updateToy?.price}
                        />
                    </div>
                    <div className='hidden'>
                        <input
                            className="text-input"
                            {...register("_id")}
                            value={updateToy._id}
                        />
                    </div>
                    <div className='mb-2'>
                        <h1>Available quantity</h1>
                        <input
                            className="text-input px-4 py-2 rounded-lg"
                            {...register("quantity", { required: true })}
                            placeholder="quantity"
                            type="number"
                            defaultValue={updateToy.quantity}
                        />
                    </div>
                    <div className='mb-2'>
                        <h1>Detail description</h1>
                        <input
                            className="text-input px-4 py-2 rounded-lg"
                            {...register("description")}
                            placeholder="description"
                            defaultValue={updateToy.description}
                        />
                    </div>

                    <div className='pt-2'>
                        <input className="btn text-white bg-orange-600" value="Update Toy" type="submit" />
                    </div>
                </div>
            </form>
        </div>
        </div>
        </div>
    );
};

export default UpdateToyModal;