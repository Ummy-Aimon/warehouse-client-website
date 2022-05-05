

import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="Banner">
          <h1 className="text-banner">Organic Food <span className="text  ">Everyday</span></h1> 
          <p className="text-white fs-4  w-50 fw-bold p-2">Product crafted with care</p> 
          <p className="fs-4 p-2 text-white  fw-bold">Bred for a high content of beneficial substance.Our Products are all fresh and healthy</p>
          <Button className="button1">Shop Now</Button>
        </div>
    );
};

export default Banner;
