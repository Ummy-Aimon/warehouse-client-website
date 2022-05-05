import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import auth from '../../FireBase-init';
import auth from '../../firebase-init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'

const SignUP = () => {
    // State
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[confirmpassword,setConfirmPassword] = useState('')
    const[error,setError] = useState('')
    const navigate= useNavigate()
    const[createUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true})
 

// Event Blur 
if (error){
console.log(error)
}

const handleNameBlur = (e) =>{
setName(e.target.value)
}

const handleEmailBlur = (e) =>{
   setEmail(e.target.value)
   console.log(e.target.value)
}

const handlePasswordBlur = e =>{
    setPassword(e.target.value)
}

const handleConfirmPasswordBlur = (e) =>{
    setConfirmPassword(e.target.value)
}
 if(user){
    navigate('/')
 }

const handleCreateUser =(e) =>{
e.preventDefault()
if(password !== confirmpassword){
setError('Your password did not match')
return
}
if(password.length <6){
    setError('Password must be 6 character')
    return;
}
createUserWithEmailAndPassword(email,password)

}
return (
    <div className="signup">
       <h1 className="fw-bold text-center text-warning mt-3">Sign Up</h1>
       <Form onSubmit={handleCreateUser} className="w-50 m-auto">  
       <Form.Group className="mb-3" controlId="formGroupEmail"/>
<Form.Label className="fw-bold"> Your Name</Form.Label>
<Form.Control onBlur={ handleNameBlur} type="text" placeholder="Enter Your Name" required/>   
<Form.Group className="mb-3" controlId="formGroupEmail">
<Form.Label className="fw-bold">Email address</Form.Label>
<Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
</Form.Group>

<Form.Group className="mb-3" controlId="formGroupPassword">
<Form.Label className="fw-bold"> Password </Form.Label>
<Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
</Form.Group>
<Form.Group className="mb-3" controlId="formGroupPassword">
<Form.Label className="fw-bold"> Comfirm Password</Form.Label>
<Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required/>

</Form.Group>

<p className="text-danger">{error}</p>
<p className="fs-5 fw-bold">
Already Have a acount ? <Link className="text-secondary text-decoration-none" to="/login">Login</Link>
</p>
<Button type="submit" className="w-100 fw-bold fs-3 text-white" variant="warning">Register</Button>
</Form>
    </div>
);
};

export default SignUP;