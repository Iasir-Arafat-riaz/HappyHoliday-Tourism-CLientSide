import React from 'react';
import InternationalTourism from './InternationalTourism/InternationalTourism';
import Packages from './Packages/Packages';
import TopBanner from './TopBanner/TopBanner';
import "./Home.css"
const Home = () => {
    return (
        <div className="home">
           <TopBanner></TopBanner>
           <Packages></Packages>
           <InternationalTourism></InternationalTourism>
        </div>
    );
};

export default Home;