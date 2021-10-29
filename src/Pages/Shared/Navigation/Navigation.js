import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import Tours from './../../Tours/Tours';

const Navigation = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
             <Navbar className="fw-bold p-3" fixed="top"  bg="light" expand="lg">
  <Container>
    
    <Navbar.Brand><img style={{height:'40px', width:'40px', borderRadius:'360px'}} src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
      Travellers</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ms-5">
        <Nav.Link as={HashLink} className="ms-4" to="/home#home">Home</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#tours">Tours</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#news">News</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#about">About</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#contact">Contact</Nav.Link>
        {
           user?.email && <NavDropdown className="ms-4" title="Booking info" id="basic-nav-dropdown">
           <NavDropdown.Item><Link to="/mybooks" style={{textDecoration:'none',color:'black'}}>My Books </Link></NavDropdown.Item>
           <NavDropdown.Item><Link to="/manageallbooks" style={{textDecoration:'none',color:'black'}}>Manage All Books</Link></NavDropdown.Item>
         </NavDropdown>
       }
       {
           user?.email && <Link to="/addanewtour" style={{textDecoration:'none',color:'gray'}} className="ms-4 mt-2">Add A New Tour</Link>
       }
      </Nav>
      <Navbar.Text>
    
     {
       user?.email&& <span><img style={{height:'40px', width:'40px', borderRadius:'360px'}} src={user?.photoURL}></img></span>

     }
        <span className="ms-2">{user?.displayName}</span>
        
       {!user?.email?
          <Link to="/login" style={{textDecoration: 'none'}}>Log in</Link>
          :  <Link to="/login"><button onClick={logOut} className="btn btn-primary ms-4">Log out</button></Link>
       }
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;