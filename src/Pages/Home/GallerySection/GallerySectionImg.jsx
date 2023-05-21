import React from 'react';

const GallerySectionImg = ({ toy }) => {

    const { image } = toy;
    console.log(image);
    return (
        
          <div>
              <img src={image} className='lg:w-72 w-32'/>
          </div>
            
        
    );
};

export default GallerySectionImg;