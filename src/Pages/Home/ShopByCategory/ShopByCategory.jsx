import React, { useEffect, useState } from 'react';
import ShopByCategoryCard from '../shopByCategoryCard/shopByCategoryCard';


const ShopByCategory = () => {

  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    fetch(`https://toy-galaxy-server-lake.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>


      <div className="mt-4 lg:mb-10 mb-4 lg:mx-10 gap-3">
        <div className="text-center">
          <h2 className="font-bold text-4xl lg:my-10 my-2 text-center text-orange-600">Category</h2>



          <div className="tab-container text-center">
            <div className="text-center w-100 m-auto">
              <div className="tabs flex justify-center items-center">
                <div
                  onClick={() => handleTabClick("sportsCar")}
                  className={`tab  tab2 sportsCar ${activeTab == "sportsCar" ? " bg-green-800 text-white" : "bg-slate-500 text-white border"
                    }`}
                >
                  Sports Car
                </div>
                <div
                  onClick={() => handleTabClick("truck")}
                  className={`tab  tab2 truck ${activeTab == "truck" ? " bg-green-800 text-white " : "bg-slate-500 text-white border"
                    }`}
                >
                  Truck
                </div>
                <div
                  onClick={() => handleTabClick("policeCar")}
                  className={`tab  tab2 policeCar ${activeTab == "policeCar" ? " bg-green-800 text-white" : "bg-slate-500 text-white border"
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
            toys.map(toy => <ShopByCategoryCard
              key={toy._id}
              toy={toy}
            >

            </ShopByCategoryCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;