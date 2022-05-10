import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ManagItem = () => {
    const navigate= useNavigate()
    const [datas,setData]= useState([])

    const handleDelete =(id)=>{
        const procced= window.confirm('Are You Sure?')
        if(procced){
const url=`https://protected-wave-71878.herokuapp.com/item/${id}`
fetch(url,{
    method: 'DELETE',
})
.then(res=>res.json())
.then(data=>{
console.log(data)
const del= datas.filter(item=>item._id!==id)
setData(del)

})
  }
    }
    useEffect(()=>{
        fetch('https://protected-wave-71878.herokuapp.com/item')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
           <h1 className="mt-3 text-warning fw-bold text-center">Manage Item</h1> 
           <div className="w-50 text-center">
           {
               datas.map(item=><div key={item._id}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.img} />
  <Card.Body>
    <Card.Title>{item.Suppliername1}<button onClick={()=>handleDelete(item._id)}>X</button></Card.Title>
    <Card.Text>
      {item.description}
    </Card.Text>
    <p> <b>Qurantity:</b>{item.Quantity}</p>
    <p><b>Price:</b>{item.price}</p>
    <Button onClick={()=>navigate("/additem")}type="submit" variant="primary">Add new Item</Button>
  </Card.Body>
</Card>
               </div>)
           }
           </div>
           </div> 
        
    );
   
};

export default ManagItem;