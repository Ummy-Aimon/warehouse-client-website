import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetails.css'

const ItemDetails = () => {
    const {itemid}= useParams()
    const[items,setItem]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/item/${itemid}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
      },[])
    return (
        <div className="item">
            <h1>{items.name}</h1>
        </div>
    );
};

export default ItemDetails;