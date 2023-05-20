import React, { useEffect, useState } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Toy from './Toy';
import { Link } from 'react-router-dom';


const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch("https://toy-galaxy-server-lake.vercel.app/allToys")
          .then((res) => res.json())
          .then((result) => {
            setToys(result);
            console.log(toys);
          });
      },[])

    return (
        <div>
            <NavigationBar></NavigationBar>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>price</th>
                            
                            <th>Available quantity</th>
                            <th>View Details</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                        toys?.map((toy, index) => (

                            <tr className='text-center' key={toy._id}>
                                        <th>{index + 1}</th>
                                        <td>{toy.sellerName}</td>
                                        <td>{toy.toyName}</td>
                                        <td>{toy.category}</td>
                                        
                                        <td>{toy.price}</td>
                                        
                                        <td>{toy.quantity}</td>
                                        <td><Link to={'/'} ><button className="btn btn-sm btn-outline btn-secondary">View Details</button></Link></td>
                                    
                                    </tr>
                                    ))    
                    }
                    </tbody>
                            
                </table>
            </div>









                
            </div>

        
    );
};

export default AllToys;