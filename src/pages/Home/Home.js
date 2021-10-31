import React from 'react';
import InternationalTourism from './InternationalTourism/InternationalTourism';
import Packages from './Packages/Packages';
import TopBanner from './TopBanner/TopBanner';
import "./Home.css"
import AdventureAndTracking from './AdventureAndTracking/AdventureAndTracking';
const Home = () => {
    //Added Two Extra Section for bonus marks
    return (
        <div className="home">
           <TopBanner></TopBanner>
           <Packages></Packages>
           <InternationalTourism></InternationalTourism>
           <AdventureAndTracking></AdventureAndTracking>
        </div>
    );
};

export default Home;

//--------------Thank You------------------