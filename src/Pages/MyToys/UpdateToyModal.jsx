import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateToyModal = (props) => {
    // console.log(props);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { handleToyUpdate } = props;
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-middle ">
                <div className="modal-box relative bg-cyan-600">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='grid grid-cols-1 text-center' onSubmit={handleSubmit(handleToyUpdate)} >

                        <div className=''>
                            <div className='mb-2'>
                                <h1>Price</h1>
                                <input
                                    className="text-input px-4 py-2 rounded-lg"
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                    defaultValue={props?.toy?.price}
                                />
                            </div>
                            <div className='hidden'>
                            <input
                                className="text-input"
                                {...register("_id")}
                                value={props?.toy?._id}
                            />
                            </div>
                            <div className='mb-2'>
                                <h1>Available quantity</h1>
                                <input
                                    className="text-input px-4 py-2 rounded-lg"
                                    {...register("quantity", { required: true })}
                                    placeholder="quantity"
                                    type="number"
                                    defaultValue={props?.toy?.quantity}
                                />
                            </div>
                            <div className='mb-2'>
                                <h1>Detail description</h1>
                                <input
                                    className="text-input px-4 py-2 rounded-lg"
                                    {...register("description")}
                                    placeholder="description"
                                    defaultValue={props?.toy?.description}
                                />
                            </div>

                            <div className='pt-2'>
                                <input className="btn text-white bg-orange-600" value="Update Toy" type="submit" />
                            </div>
                        </div>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToyModal;