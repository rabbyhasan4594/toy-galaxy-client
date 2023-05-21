import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/Hook';


const MyToys = () => {
    useTitle('MyToys')
    const { user, loading } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    
    const [control, setControl] = useState(false);
    const [deleteControl, setDeleteControl] = useState(false);




    useEffect(() => {
        fetch(`http://toy-galaxy-server-lake.vercel.app/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);

            });
    }, [user, control, deleteControl]);


    const handleToyUpdate = (data) => {
        console.log(data);

        fetch(`http://toy-galaxy-server-lake.vercel.app/updateToy/${data._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    setControl(!control);
                }
                console.log(result);
            });


    };


    if (loading) {
        return <progress className="progress w-56"></progress>
    }


    const handleSortMyToys =()=>{
        fetch(`http://toy-galaxy-server-lake.vercel.app/myToysSort/${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                     setToys(data);
                    console.log(data);

                });
    }


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`https://toy-galaxy-server-lake.vercel.app/myToysDelete/${_id}`, {
                    method: "DELETE",
                    
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            console.log(data.deletedCount);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success',

                            )
                            setDeleteControl(!deleteControl)

                        }

                    });
            }
        })
    }


    return (
        <div>
            <NavigationBar></NavigationBar>




            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Toy Image</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>seller email</th>
                            <th>Sub-category</th>
                            <th>price</th>
                            <th>Rating</th>
                            <th>Available quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((toy, index) => (
                                <tr className='text-center' key={toy._id}>
                                    <th>{index + 1}</th>
                                    <th><img src={toy.image} alt="" /></th>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.sellerEmail}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.rating}</td>
                                    <td>{toy.quantity}</td>

                                    <td>

                                        <Link to={`/update/${toy._id}`}><label htmlFor="my-modal-6" className="btn btn-sm btn-outline btn-primary" >Update</label></Link>

                                     


                                    </td>

                                    <td><button className="btn btn-sm btn-outline btn-secondary" onClick={() => handleDelete(toy._id)}>Delete</button></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
            <div className='text-center'> <button className="btn bg-cyan-700 text-white" onClick={handleSortMyToys}>Sort By Ascending</button></div>


        </div>
    );
};

export default MyToys;