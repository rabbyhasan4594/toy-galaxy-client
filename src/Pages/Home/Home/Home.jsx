import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../shopByCategory/shopByCategory';
import GallerySection from '../GallerySection/GallerySection';
import FeedBack from '../FeedBack/FeedBack';
import WayToShop from '../WayToShop/WayToShop';
import useTitle from '../../../Hook/Hook';


const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
     
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <WayToShop></WayToShop>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;