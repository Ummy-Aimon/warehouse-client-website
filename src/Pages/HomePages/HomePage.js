import React from 'react';
import Contact from '../../Component/Contact/Contact';
import FruitItem from '../../Component/FruitItems/FruitItem';
import About from './About/About';
import Banner from './Banner/Banner';


const HomePage = () => {
    return (
        <div>
          <Banner></Banner>  
          <About></About>
          <FruitItem></FruitItem>
          <Contact></Contact>
        </div>
    );
};

export default HomePage;