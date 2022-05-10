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
        <div className="sticky">
            <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
  <Container>
  <Navbar.Brand>Fruitella</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link className="nav"  as={Link} to='/' href="#home">Home</Nav.Link>
      <Nav.Link className="nav"  href="#about">About Us</Nav.Link>
      <Nav.Link className="nav" href="#items">Items</Nav.Link>
      <Nav.Link  className="nav" as={Link} to='/blog' href="#home">Blog</Nav.Link>
      <Nav.Link className="nav" href="#contact">Contact Us</Nav.Link>
    </Nav>
    <Nav className="mx-auto">
      <Nav.Link className="nav" as={Link} to='/signup' href="#signup">Sign Up</Nav.Link>
      { user && <>
      <Nav.Link className="nav"  as={Link} to='/myitems' href="#myitems">My Items</Nav.Link>
      <Nav.Link className="nav"  as={Link} to='/additem' href="#additem">Add item</Nav.Link>
      <Nav.Link className="nav"  as={Link} to='/manageitem' href="#manageitem">ManageItem</Nav.Link> </>

}
      { user?
      <Link id="nav" onClick={handleSignOut} className="signout" to=''>Logout</Link>
    
      :
    
        <Nav.Link className="nav" as={Link} to='/login' href="#login">Login</Nav.Link>
}
 </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
    );
};

export default Header;
