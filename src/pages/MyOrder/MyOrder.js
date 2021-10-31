import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../Hooks/useAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const {user}=useAuth()
  const email=user.email
  useEffect(() => {
    fetch("https://radiant-harbor-69471.herokuapp.com/allOrder")
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, []);

  const onlyMyOrder= myOrder.filter(own=>own.bookingInfo.email == email)
console.log(myOrder);
//Remove Order from My order Page
const ownOrderRemove=(event)=>{
   const confirmation = window.confirm("Are you sure delete this order")
   if(confirmation){
    fetch(`https://radiant-harbor-69471.herokuapp.com/allOrder/${event}`,{
        method:"delete"
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.deletedCount){
           const remainingOrder = onlyMyOrder.filter(rest=>rest._id!=event)
           setMyOrder(remainingOrder)
       }
    })
   }

}
  return (
    <div>
      <h1>My order section</h1>
      <div className="myOrder-Div ">
          {onlyMyOrder.map((orderInfo) => (
            <div className="my-order" key={orderInfo._id}>
              <div>
                <h2>Name:{orderInfo?.bookingInfo?.name}</h2>
                <h4>Email : {orderInfo?.bookingInfo?.email}</h4>
                <h6>Address: {orderInfo?.bookingInfo?.address}</h6>
                <h6>Contact No: {orderInfo?.bookingInfo.phone}</h6>
                <h6>Selected Resort: {orderInfo?.bookingInfo?.resort}</h6>
                <h6> Total Advance: {orderInfo?.bookingInfo?.charge}TK</h6>
                <h6>Resort going Date: {orderInfo?.bookingInfo?.date}</h6>
                <button onClick={()=>ownOrderRemove(orderInfo._id)} className="btn btn-danger mt-3">Remove Order</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default MyOrder;
