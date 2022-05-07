import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="blog">
            <h3 className="m-3">Difference between javascript and nodejs
            </h3>
            <p className="m-3"><b>Nodejs:</b> Node.js runtime environment supports creating highly scalable server-side javascript application which are event driven ansynchronous</p>
            <p className="m-3"><b>JavaScript:</b> Many web application have a server-side to them and javascript is used to create content and handle Http request</p>
            <h3 className="m-3">Differences between sql and nosql databases.</h3>
            <p className="m-3"><b>SQL:</b> SQL is generally used in Relational Database Managment system.The schemas are static </p>
            <p className="m-3"><b>NoSQL:</b> SQL is  used for Non-Relational distributed database system.The schemas are dynamic </p>
            <h3 className="m-3">What is the purpose of jwt and how does it work</h3>
            <p className="m-3">JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
            It works the client wants to access some protected data on our server but the server knows clients cannot be trusted.The server only wants to  give the data to a trust worthly client.</p>
            <p className="m-3">
            1. GET/LOGIN with username and password
            <br></br>
            2. Server creates a JWT Token.
            <br></br>
            3. Server returns JWT to the Client.
            <br></br>
            4.Client sends a copy of the JWT when making a request.
            <br></br>
            5.Server checks JWT signature.
            <br></br>
            6. Server sends response to Client.
            </p>

        </div>
    );
};

export default Blog;