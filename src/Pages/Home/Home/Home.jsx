import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../shopByCategory/shopByCategory';
import GallerySection from '../GallerySection/GallerySection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;