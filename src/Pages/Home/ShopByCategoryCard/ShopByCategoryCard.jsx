import React from 'react';
import { Link } from 'react-router-dom';

const ShopByCategoryCard = ({toy}) => {

    const { _id, image, toyName, price,rating } = toy;
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl h-56" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Name: {toyName}</h2>
            <p className="text-xl text-cyan-700">Price: ${price}</p>
            <p className="text-xl text-cyan-700 mb-2">Rating: {rating}</p>
            <div className="card-actions">
                <Link to={'/'}>
                <button className="btn btn-outline btn-accent">View Details</button>

                </Link>
            </div>
        </div>
    </div> 
        </div>
    );
};

export default ShopByCategoryCard;