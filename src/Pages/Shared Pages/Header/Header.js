import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase-init';
import './Header.css'

const Header = () => {
  const[user]=useAuthState(auth)
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/' href="#home">Fruitella</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={Link} to='/' href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
      <Nav.Link href="#items">Items</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/signup' href="#signup">Sign Up</Nav.Link>
      { user?
      <Link onClick={handleSignOut} className="signout" to=''>Logout</Link>
      :
      <Link className="header" to='/login'>
        Login
      </Link>
}
      {/* <Nav.Link as={Link} to='/login' href="#login">Login</Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
