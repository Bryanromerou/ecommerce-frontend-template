import React, { useEffect, useState } from 'react';
import {
  Navbar, Nav
} from 'react-bootstrap';
import { useHistory } from 'react-router';

const Index = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    setUser(user)
  },[])

  const signOut = ()=>{
    localStorage.clear()
    setUser(null)
    history.push("/")
  }

  let cartTotal = 0
  return (
    <div>
      <Navbar  bg="light" expand="lg">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/products">Products</Nav.Link>
            {user?
            <>
              {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
              <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
            </>
            :
            <Nav.Link href="/signIn">Sign In</Nav.Link>
            }
            <Nav.Link href="/cart">Cart({cartTotal})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  );
}

export default Index;
