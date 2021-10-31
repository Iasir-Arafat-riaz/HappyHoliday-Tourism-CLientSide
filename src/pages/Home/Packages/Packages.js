import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import { useAuth } from "../../../Hooks/useAuth";
import SinglePackage from "./SinglePackage/SinglePackage";
import "./Packages.css"


const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    fetch("https://radiant-harbor-69471.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  console.log(packages);

  console.log("four");
  return (
    <div className="packages-plans">
      <h2 className="common-header">Our Top Packages and Plans</h2>
      <Row xs={1} md={2} className="g-4 m-3">
        {packages.map((packg, index) => (
          <SinglePackage key={index} package={packg}></SinglePackage>
        ))}
      </Row>
    </div>
  );
};

export default Packages;
