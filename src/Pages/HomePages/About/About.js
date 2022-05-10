import React from 'react';
import about from '../../../Images/about.jpg'
import about1 from '../../../Images/about1.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className="mt-5 text-center text-warning fw-bold">About Us</h1>
            <div className="container">
                <div className="row">
                    <div className="grid">
                    <div className="col-md-4">
                  <img className="img" src={about} alt="" />
                    </div>
                    <div className="col-md-8">
                    <h2 className="mt-5 fw-bold text-warning">Who are we</h2>
                    <h4>What is our mission?</h4>
                    <p className="text-justify">Our mission is to bring our customers quality products, at the lowest price with the best service in the industry. That is why we are premier online marijuana dispensary! We offer our clients a user-friendly platform where you are only a few clicks away from guaranteed delivery of the highest quality marijuana products right to your front door-step.</p>
                    </div>
                    <div className="col-md-8">
                    <h2 className="mt-5 fw-bold text-warning">Why choose us</h2>
                    <h4>How are we the best?</h4>
                    <p className="text-jutify">Customer satisfaction is our top priority, there is nothing more exciting to us than a repeat customer. With our price match policy along with guaranteed Xpresspost delivery, we have been regarded as one of most trusted online marijuana dispensaries. For more information please look at our F.A.Q. page for answers to common questions.</p>
                    </div>
                    <div className="col-md-4">
                    <img className="img" src={about1} alt="" />
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default About;