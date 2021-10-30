import React from 'react';

const SinglePackage = (props) => {
    const {packg,info,img}=props.package
    return (
        <div>
            {/* <img src={img} alt=""/> */}
            <h1>pacakage title :{packg}</h1>
            <p>{info}</p>
        </div>
    );
};

export default SinglePackage;