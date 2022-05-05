import React, { useEffect, useState } from 'react';
import Item from './Item';
import './FruitItem.css'

const FruitItem = () => {
    const [items,setItem]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/item')
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    return (
        <div>
            <h1 className="fw-bold text-warning text-center mt-5">New Product Item's</h1>
           <p className="text-center text-warning fw-bold">All the best items for You</p> 
           <div className="item-container">
           {
               items.map(item=><Item key={item._id} item={item}></Item>)
           }
           </div>
            
        </div>
    );
};

export default FruitItem;