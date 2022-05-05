import React from 'react';
import notfound from '../../../Images/404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
           <h1 className="text-warning fw-bold mt-3 text-center">Ooop!</h1> 
           <img className="image" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;