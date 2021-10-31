import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PlaceOrder.css";
import axios from "axios";
import { useAuth } from "../../Hooks/useAuth";


const PlaceOrder = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();

  const { Id } = useParams();
  const [singlePackage, setSinglePackage] = useState({});
  const { user } = useAuth();
  const { email, displayName } = user;
  // console.log(email, displayName);

  //load individual tour-package information
  useEffect(() => {
    fetch(`https://radiant-harbor-69471.herokuapp.com/packages/${Id}`)
      .then((res) => res.json())
      .then((data) => setSinglePackage(data.addingInfo));
  }, []);
  console.log(singlePackage);
  const { packageNo, cost, img, info, packg } = singlePackage;

  console.log("costing is",img,cost)

  //Post operation for order placing
  const onSubmit = (data) => {
    data.date = startDate;
    axios
      .post("https://radiant-harbor-69471.herokuapp.com/packages", data)
      .then((res) => console.log(res));
  };

  console.log(startDate);
  return (
    <div className="place-order-mainDiv">
      <h1>Book Now and going with us</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-12 place-OrderDiv">
          <h3>Tour Package: {packageNo}</h3>

          <img src={img} alt="" />
          <h4>{packg}</h4>
          <p>{info}</p>
          <h5>One night Two day package per couple:{cost}TK</h5>
          <br />
          <br />
          <b>Select going date</b>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              value={displayName}
              required
              placeholder="enter your name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              value={email}
              required
              placeholder="enter your email"
              {...register("email")}
            />
            <input
              required
              placeholder="enter your address"
              {...register("address")}
            />
            <input
              required
              placeholder="enter your contact number"
              type="number"
              {...register("phone")}
            />
            <input
              required
              placeholder="enter resort name"
              {...register("resort")}
            />
            <input
              required
              placeholder="enter advance amount"
              type="number"
              {...register("charge")}
            />
            <br />

            <input className="bg-warning" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

//----------------THANKS TO YOU FOR YOUR VALUABLE TIME AND SUPPORT