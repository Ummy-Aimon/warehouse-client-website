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
        const url=`https://protected-wave-71878.herokuapp.com/orderItems?email=${email}`
    // const url=`http://localhost:5000/orderItems`
const{data}= await axios.get(url)
console.log(data,"connected")
setItems(data)
 }
 getItem()
    },[user])

    return (
        <div>
           <h1>MY ITEMS:{items.length}</h1> 
               <div className="text-center">{
               items.map(item=><div key={item._id}>
                   <h1>name:{item?.name}<button>X</button></h1>
                   <p>Qurantity:{item?.Quranty}</p>
                   <p>discription:{item?.discription}</p>

               </div>)
           }
           </div>
            
        </div>
    );
};

export default MyItem;
