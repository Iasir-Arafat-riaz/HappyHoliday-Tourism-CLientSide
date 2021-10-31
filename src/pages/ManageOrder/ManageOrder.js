import React, { useEffect, useState } from 'react';


const ManageOrder = () => {
    const [manageOrder,setManageOrder]=useState([])
    useEffect(()=>{
        fetch("https://radiant-harbor-69471.herokuapp.com/allOrder")
        .then(res=>res.json())
        .then(data=>setManageOrder(data))
    },[])
    console.log(manageOrder)

    const removeThisOrder=(e)=>{
       const confirm = window.confirm("Are you sure delete this order")
       if(confirm){
        fetch(`https://radiant-harbor-69471.herokuapp.com/allOrder/${e}`,{
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
           const remainingOrder=manageOrder.filter(rem=>rem._id!=e)
           setManageOrder(remainingOrder)
        })
       }
    }

   
    return (
        <div>
      <h1>Manage All Order</h1>
      <div className="myOrder-Div ">
      {manageOrder.map((orderInfo) => (
        <div className="my-order "   key={orderInfo._id}>
          <div >
            <h2>Name:{orderInfo?.bookingInfo?.name}</h2>
            <h4>Email : {orderInfo?.bookingInfo?.email}</h4>
            <h4>Address: {orderInfo?.bookingInfo?.address}</h4>
            <h4>Contact Number: {orderInfo?.bookingInfo?.phone}</h4>
            <h5>Selected Resort: {orderInfo?.bookingInfo?.resort}</h5>
            <h6> Total Advance: {orderInfo?.bookingInfo?.charge}TK</h6>
            <h6>Resort going Date: {orderInfo?.bookingInfo?.date}</h6>
            <button onClick={()=>removeThisOrder(orderInfo._id)} className="btn btn-danger mt-3">Remove Order</button>
          </div>
        </div>
      ))}
      </div>
    </div>
    );
};

export default ManageOrder;