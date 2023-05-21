import React, { useEffect, useState } from 'react';
import GallerySectionImg from './GallerySectionImg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const GallerySection = () => {
    const [toys, setToys] = useState([]);
  
    useEffect(() => {
      fetch(`https://toy-galaxy-server-lake.vercel.app/allToysLimit`)
        .then((res) => res.json())
        .then((result) => {
          setToys(result);
          console.log(result);
        });
    }, []);
    return (
        <div>
      <h1 data-aos="animation_name" className='font-bold text-4xl lg:my-10 my-2 text-center text-orange-600'>Gallery Section</h1>
<div className="carousel carousel-center rounded-box lg:my-7 my-2">
<div className="carousel-item">
{
            toys.map(toy => <GallerySectionImg
              key={toy._id}
              toy={toy}
            >
            </GallerySectionImg>)
          }
          </div>
  </div> 



         
        </div>
    );
};

export default GallerySection;