import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <h1 className="mt-3 fw-bold text-warning text-center">Contact Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                   <div className="">
                   <BsFacebook ></BsFacebook> <Link className="text-decoration-none" to="https://www.facebook.com">Facebook </Link>
                   <br></br>
                   <FcGoogle> </FcGoogle> <Link className="text-decoration-none" to="https://www.facebook.com">Google </Link>
                   <h6 className="mt-2">Address</h6>
                   <p>Sidestate NSW 4132, Bangladesh</p>
                   <h6 className="mt-2">Email</h6>
                   <p>info@gmail.com</p>
                   <h6 className="mt-2">Support</h6>
                   <p>(+88) 018 4113 6251</p>
                   </div>
                    </div>
                    <div className="col-md-6">
                    <Form className="form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Your name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Label>Your message</Form.Label>
  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <br></br>
  <Button variant="primary" type="submit">
    send message
  </Button>
</Form>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;