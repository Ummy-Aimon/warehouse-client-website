import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    // const navlink= useNavigate()
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
            <h1>ADD Items</h1>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-3" placeholder="name" {...register("name", { required: true, maxLength: 20 })}/>
      {/* <input className="mb-3" placeholder="Suppliername" {...register("Suppliername1", { required: true, maxLength: 20 })}/> */}

      <input className="mb-3" placeholder="Email" {...register("email", { required: true, maxLength: 20 })}/>
      
      <textarea className="mb-3" placeholder="description" {...register("discription")}/>
     
      <input className="mb-3" placeholder="price" type="number" {...register("price")}/>
      <input className="mb-3" placeholder="Quranty" type="number" {...register("Quranty")}/>
      
      <input className="mb-3" placeholder="photo Url" type="text" {...register("img")}/>
      
      <input type="submit"  value="Add Service"/>
    </form>
        </div>
    );
};

export default AddItem;