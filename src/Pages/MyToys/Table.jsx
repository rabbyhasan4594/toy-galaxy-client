import React from 'react';

const Table = ({toy, index}) => {
     const {image,toyName,sellerName,sellerEmail,category,price,rating,quantity}=toy
    return (
            <tr className='text-center'>
                <th>{index+1}</th> 
                <th><img src={image} alt="" /></th> 
                <td>{toyName}</td> 
                <td>{sellerName}</td> 
                <td>{sellerEmail}</td> 
                <td>{category}</td> 
                <td>{price}</td> 
                <td>{rating}</td> 
                <td>{quantity}</td> 
                 
                <td><button className="btn btn-sm btn-outline btn-primary">Update</button></td> 
                
                <td><button className="btn btn-sm btn-outline btn-secondary">Delete</button></td>
              </tr>
    );
};

export default Table;