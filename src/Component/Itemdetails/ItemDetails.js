import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ItemDetails.css'

const ItemDetails = (props) => {
    const [quantity, setQuantity] = useState(0)
    const {id}= useParams()
    // console.log(itemID)
    const[items,setItem]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/item/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
      },[quantity])
      const handleDeliverBtn = id => {
        const url= `http://localhost:5000/updateitem/${id}`
   fetch(url,{
       method: 'PUT',
       headers: { 
           'content-type':'application/json'
    },

    body: JSON.stringify({Quantity : parseInt(items.Quantity) - 1,  sold : parseInt(items.sold) + 1})
   })
   .then(res=> res.json())
   .then(data => {console.log(data); setQuantity(parseInt(items.Quantity) - 1)})
      }
    return (
        <div className="item">
          <Card.Img className="img-item" variant="top" src={items.img} />
  <Card.Body>
    <Card.Title className="title">{items.name}</Card.Title>
    <Card.Text className="text-jutify">
      {items.description}
    </Card.Text>
    <h4 className="fw-bold text-warning">Supplier name:{items.Suppliername1}</h4>
    <p className="text-secondary fw-bold">Quantity name:{items.Quantity}</p>
    <p className="text-secondary fw-bold">Sold:{items.sold}</p>
    <p className="text-secondary fw-bold">$price:{items.price}</p>
     <Button onClick={()=> {handleDeliverBtn(items._id)}} type="submit" variant="primary">Delivered</Button>
  </Card.Body>
         
        </div>
    );
};

export default ItemDetails;