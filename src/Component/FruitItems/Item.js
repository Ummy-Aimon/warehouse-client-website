import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const{name,img,description,Quantity,price,Suppliername1}=props.item
    
    const navlink= useNavigate()
   
    return (
        
            <div className="shadow p-3 mb-5 bg-body rounded ">
            {/* <Card style={{ width: '18rem' }}> */}
  <Card.Img className="img-item" variant="top" src={img} />
  <Card.Body>
    <Card.Title className="title">{name}</Card.Title>
    <Card.Text className="text-jutify">
      {description}
    </Card.Text>
    <h4 className="fw-bold text-warning">Supplier name:{Suppliername1}</h4>
    <p className="text-secondary fw-bold">Quantity name:{Quantity}</p>
    <p className="text-secondary fw-bold">$price:{price}</p>
    <Button onClick={()=>navlink("/itemdetail")} type="submit" variant="primary">Updated Item</Button>
  </Card.Body>
{/* </Card> */}
        </div>
        
    );
};

export default Item;