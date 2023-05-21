import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../shopByCategory/shopByCategory';
import GallerySection from '../GallerySection/GallerySection';
import FeedBack from '../FeedBack/FeedBack';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
     
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;