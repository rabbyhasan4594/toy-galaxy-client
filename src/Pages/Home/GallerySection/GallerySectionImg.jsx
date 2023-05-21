import React from 'react';

const GallerySectionImg = ({ toy }) => {

    const { image } = toy;
    console.log(image);
    return (
        
            <img src={image} className='lg:w-72 w-40'/>
            
        
    );
};

export default GallerySectionImg;