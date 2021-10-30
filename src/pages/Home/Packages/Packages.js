import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import SinglePackage from "./SinglePackage/SinglePackage";

const alltourPackage=[
    {packageNo:1, packg:"Holiday with Bhawal Resort", info:"Bhawal Resort is an elegant resort surrounded by rain forest which is located at Gazipur, Dhaka and about 39 km far from Hazrat Shahjalal Airport. It’s an exotic resort with 61 cottages which is divided into 7 categories",cost:20000,img:"https://i.ibb.co/QMtLLky/Bhawal.png"},
    {packageNo:2, packg:"Holiday with Chuti Resort", info:"Chuti Resort and Picnic Spot is an authentic place for the holiday hunters which is situated on 54 acres of land at Sukundi village, 3km far away from Gazipur Eco cottage, beautiful lake,birdhouse, tent house, traditional food",cost:15000,img:"https://i.ibb.co/BGyrNFs/Chuti.png"},
    {packageNo:3, packg:"Holiday with Sairu hill Resort", info:"SAIRU Hill Resorts is set against the spectacular greenery covered hill range of Bandarban in the Chittagong Hill Tracts, renowned for its natural beauty and considered as the heart of Buddhist culture within Bangladesh.",cost:40000,img:"https://i.ibb.co/ssVCGkL/sairu.png"},
    {packageNo:4, packg:"Holiday with The BaseCamp", info:"The Base Camp is the best place for spending a holiday with enough enjoyment and fun activities which is situated at Rajendrapur, Gazipur. There you will find adventurous activities like off-road cycling track, great swimming pool.",cost:18000,img:"https://i.ibb.co/v3y0YRf/the-Base-Camp.png"},
    {packageNo:5, packg:"Holiday with Dusai Resort", info:"DuSai Resort & Spa is the first world class 5 star standard boutique Villa Resort & Spa in Bangladesh nestled within a small tropical forest on hillocks with thousands of trees and flanked by a 1000 feet long serpentine lake.",cost:42000,img:"https://i.ibb.co/Y3mWJ9D/dusai-sylhet.png"},
    {packageNo:6, packg:"Holiday with Aronnok Lakeshore", info:"This wonderful Resort in the heart of kaptai lake to spend some quality time with friends & family. All the facilities available that u can dream into a lake. this is a awesome place",cost:15000,img:"https://i.ibb.co/q14XMP6/aronnok.png"},
]

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [pageLoading,setPageLoading]=useState(true)

  useEffect(() => {
    
    
    fetch("https://radiant-harbor-69471.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
      
      
  }, []);
  
  
  
 
  console.log("four")
  return (
    <div>
      <h2>Our Top Packages</h2>
      
      {
          packages.map((packg,index)=><SinglePackage key={index} package={packg}></SinglePackage>)
      }
    </div>
  );
};

export default Packages;
