import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Item from './Product Item/Item';

const HomePage = () => {
    return (
        <div>
          <Banner></Banner>  
          <About></About>
          <Item></Item>
        </div>
    );
};

export default HomePage;