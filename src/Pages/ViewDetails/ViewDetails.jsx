import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/Hook';

const ViewDetails = () => {
    useTitle('ViewDetails')
    const viewDetails = useLoaderData();
    const{image,toyName, sellerName, sellerEmail, price, rating,quantity,description}=viewDetails;
    console.log(viewDetails);
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="card w-96 glass mx-auto my-10">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{toyName}</h2>
    <p>Seller Name : {sellerName}</p>
    <p>Seller Email : {sellerEmail}</p>
    <p>Price : {price}</p>
    <p>Rating : {rating}</p>
    <p>Available quantity : {quantity}</p>
    <p>Detail description : {description}</p>
   
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default ViewDetails;