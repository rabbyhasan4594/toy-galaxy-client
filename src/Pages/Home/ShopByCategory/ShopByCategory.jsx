import React, { useEffect, useState } from 'react';

const ShopByCategory = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${activeTab}`)
          .then((res) => res.json())
          .then((result) => {
            setToys(result);
            console.log(result);
          });
      }, [activeTab]);
    
      const handleTabClick = (tabName) => {
        console.log(tabName);
        setActiveTab(tabName);
      };
    return (
        <div>
            <div className="mt-4 mb-96">
            <div className="text-center">
                <h2 className="text-5xl mb-4">Category</h2>



                <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs flex justify-center items-center">
            <div
              onClick={() => handleTabClick("sportsCar")}
              className={`tab  tab2 sportsCar ${
                activeTab == "sportsCar" ? " bg-green-800 text-white" : "bg-slate-500 text-white border"
              }`}
            >
              Sports Car
            </div>
            <div
              onClick={() => handleTabClick("truck")}
              className={`tab  tab2 truck ${
                activeTab == "truck" ? " bg-green-800 text-white " : "bg-slate-500 text-white border"
              }`}
            >
              Truck
            </div>
            <div
              onClick={() => handleTabClick("policeCar")}
              className={`tab  tab2 policeCar ${
                activeTab == "policeCar" ? " bg-green-800 text-white" : "bg-slate-500 text-white border"
              }`}
            >
              Police Car
            </div>
          </div>
        </div>
      </div>



                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    // services.map(service => <ServiceCard
                    //     key={service._id}
                    //     service={service}
                    // ></ServiceCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default ShopByCategory;