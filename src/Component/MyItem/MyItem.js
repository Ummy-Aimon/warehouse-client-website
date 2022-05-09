import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';

const MyItem = () => { 
    const [user]= useAuthState(auth)
    const[items,setItems]=useState([])
    // console.log(items)
    useEffect(()=>{
 const getItem = async()=>{
     const email= user?.email
        const url=`http://localhost:5000/orderItems?email=${email}`
    // const url=`http://localhost:5000/orderItems`
const{data}= await axios.get(url)
console.log(data,"connected")
setItems(data)

    
    // fetch(url,{
    //     method: 'GET',
    //     headers: { 
    //         'content-type':'application/json'
    //  },
 
    //  body: JSON.stringify(data)
    // })
    // .then(res=>res.json())
    // .then(result=>
    //  {
    //      console.log(result)
    // })
 }
 getItem()
    },[user])

    return (
        <div>
           <h1>MY ITEMS:{items.length}</h1> {
               items.map(item=><div key={item._id}>
                   <h1>name:{item?.name}<button>X</button></h1>
                   <p>Qurantity:{item?.Quranty
}</p>

               </div>)
           }
           
        </div>
    );
};

export default MyItem;
