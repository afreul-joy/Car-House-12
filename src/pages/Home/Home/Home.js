import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import ShowReviews from '../ShowReviews/ShowReviews';
import LatestOffers from '../LatestOffers/LatestOffers';

// showing home section
const Home = () => {
    return (
        <div>
            <Header />
            <Banner></Banner>
            <Products></Products>
            <ShowReviews></ShowReviews>
            <LatestOffers></LatestOffers>
            <Footer />
        </div>
    );
};

export default Home;