import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { AuthContext } from '../../Providers/AuthProvider';
import UpdateToyModal from './UpdateToyModal';


const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://toy-galaxy-server-lake.vercel.app/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);

            });
    }, [user,control]);

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
          setControl(!control);
        }
        console.log(result);
      });


      };


    if (loading) {
        return <progress className="progress w-56"></progress>
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

                                        <label htmlFor="my-modal-6" className="btn btn-sm btn-outline btn-primary" onClick={() => setModalShow(true)}>Update</label>

                                        <UpdateToyModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                            toy={toy}
                                            handleToyUpdate={handleToyUpdate}
                                        />


                                    </td>

                                    <td><button className="btn btn-sm btn-outline btn-secondary">Delete</button></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyToys;