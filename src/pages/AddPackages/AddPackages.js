import React from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./AddPackages.css"

const AddPackages = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    //   const dataobject ={bookingInfo:     }
      console.log(data)
      axios.post("https://radiant-harbor-69471.herokuapp.com/packagess",data)
      .then()
      reset()
  };
  return (
    <div className="add-Packages-Plan">
      <h2 className="common-header">You Can Add New Package Plan</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input required placeholder="enter package plane ID" type="number" {...register("packageNo")} />
        <input required placeholder="enter package name includes resort name" {...register("packg")} />
        <textarea required  placeholder="enter description about your tour packages" {...register("info")} />
        
        <input required placeholder="enter exact cost for your Package"  type="number" {...register("cost")} />
        <input required placeholder="you can submit photo, must need resorts/cottages url  "  {...register("img")} />

        <input className="bg-danger" type="submit" />
      </form>
    </div>
  );
};

export default AddPackages;
