import React from 'react';
import FruitItem from '../../Component/FruitItems/FruitItem';
import About from './About/About';
import Banner from './Banner/Banner';


const HomePage = () => {
    return (
        <div>
          <Banner></Banner>  
          <About></About>
          <FruitItem></FruitItem>
        </div>
    );
};

export default HomePage;