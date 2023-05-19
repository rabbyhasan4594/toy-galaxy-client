import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { AuthContext } from '../../Providers/AuthProvider';
import Table from './Table';

const MyToys = () => {
    const { user,loading } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-galaxy-server-lake.vercel.app/myToys/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
             
            
             setToys(data);
            
          });
      }, [user]);
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
            toys?.map((toy, index) => <Table
            key={toy._id}
            toy={toy}
            index={index}></Table>)
        }
     
        
    </tbody> 
  </table>
</div>



        </div>
    );
};

export default MyToys;