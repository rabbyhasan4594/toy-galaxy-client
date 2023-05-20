import React from 'react';
const Toy = ({toy,index}) => {
    return (
        <div>
            <div className="overflow-x-auto table table-compact w-full">
            <tr className=''>
                                    <th>{index + 1}</th>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.category}</td>
                                    
                                    <td>{toy.price}</td>
                                    
                                    <td>{toy.quantity}</td>
                                    <td>
                                    <td><button className="btn btn-sm btn-outline btn-secondary">View Details</button></td>
                                    </td>
                                </tr>
                                </div>
        </div>
    );
};

export default Toy;