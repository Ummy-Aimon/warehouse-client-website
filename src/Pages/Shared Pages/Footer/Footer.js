import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import './Footer.css'


const Footer = () => {
    const today= new Date();
    const year= today.getFullYear();
    return (
        <div className="footer">         
         <hr className="text-white"></hr>
         <div className="">    
        <p className="text-center fw-bold text-white ">All Rights Reserved © {year} Dr. Mike</p> 
        
        <div className="icons-footer">
                      <div className="icon">
                      <FaYoutube></FaYoutube>
                      </div>
                      <div className="icon">
                      <BsFacebook></BsFacebook>
                      </div>
                      <div className="icon">
                      <AiFillInstagram></AiFillInstagram>
                      </div>
                      <div className="icon">
                      < BsTwitter></BsTwitter> 
                      </div>
                      </div>   
                  </div>
        
        </div> 
    );
};

export default Footer;