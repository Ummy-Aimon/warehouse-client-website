import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const MyItems = () => {
    const navlink= useNavigate()
    const { register, handleSubmit } = useForm();

// const handleItem=()=>{
//   navlink("/additem")
// }
  const onSubmit = data => {
  const url= `http://localhost:5000/item`
   fetch(url,{
       method: 'POST',
       headers: { 
           'content-type':'application/json'
    },

    body: JSON.stringify(data)
   })
   .then(res=>res.json())
   .then(result=>
    {
        console.log(result)
   })
  }
    return (
        <div className="w-50 mx-auto">
            <h1>My Items</h1>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-3" placeholder="name" {...register("name", { required: true, maxLength: 20 })}/>
      
      <textarea className="mb-3" placeholder="description" {...register("discription")}/>
     
      <input className="mb-3" placeholder="price" type="number" {...register("price")}/>
      
      <input className="mb-3" placeholder="photo Url" type="text" {...register("img")}/>
      
      <input type="submit"  value="Add Service"/>
    </form>
        </div>
    );
};

export default MyItems;