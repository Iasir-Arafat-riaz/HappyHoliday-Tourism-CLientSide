import React from 'react';
import Packages from './Packages/Packages';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
           <TopBanner></TopBanner>
           <Packages></Packages>
        </div>
    );
};

export default Home;