import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SinglePackage from "./SinglePackage/SinglePackage";

const alltourPackage=[
    {}
]

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://radiant-harbor-69471.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log(packages);

  return (
    <div>
      <h2>packages section</h2>
      {
          packages.map((packg,index)=><SinglePackage key={index}></SinglePackage>)
      }
    </div>
  );
};

export default Packages;
