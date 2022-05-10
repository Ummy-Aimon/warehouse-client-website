import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';


const ManagItem = () => {
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
               {/* <Card style={{ width: '18rem' }}> */}
  <ListGroup variant="flush">
    <ListGroup.Item><b>name:</b>{item.Suppliername1} 
    <button onClick={()=>handleDelete(item._id)}>X</button></ListGroup.Item>
    <ListGroup.Item><b>Quantity:</b>{item.Quantity
}</ListGroup.Item>
    <ListGroup.Item><b>Price:</b>{item.price}</ListGroup.Item>
  </ListGroup>
{/* </Card> */}

               </div>)
           }
           </div>
           </div> 
        
    );
   
};

export default ManagItem;