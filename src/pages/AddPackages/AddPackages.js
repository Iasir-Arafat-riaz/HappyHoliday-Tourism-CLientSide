import React from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./AddPackages.css"

const AddPackages = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //   const dataobject ={bookingInfo:     }
      console.log(data)
      axios.post("http://localhost:4001/packagess",data)
      .then()
  };
  return (
    <div className="add-Packages-Plan">
      <h2>You Can Add New Package Plan</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="enter package plane ID" type="number" {...register("packageNo")} />
        <input placeholder="enter package name includes resort name" {...register("packg")} />
        <textarea  placeholder="enter description about your tour packages" {...register("info")} />
        
        <input placeholder="enter exact cost for your Package"  type="number" {...register("cost")} />
        <input placeholder="you can submit photo, must need resorts/cottages url  "  {...register("img")} />

        <input  type="submit" />
      </form>
    </div>
  );
};

export default AddPackages;
