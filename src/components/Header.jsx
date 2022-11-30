import React from 'react'
import { Container,Nav, FormControl, Navbar,Dropdown, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
   <Navbar bg="dark" variant='dar' style={{height:80}} >
    <Container>
        <Navbar.Brand>
            <Link to='/' >Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl style={{width:500}} className='a-auto' placeholder="Search a product" />
        </Navbar.Text>
        <Nav>
        <Dropdown alignRight>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FaShoppingCart color='white' fontSize="25"/>
        <Badge>{10} </Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu  style={{minWidth:370}} variant="dark">
        <span style={{padding:10}}> Cart is empty</span>
      </Dropdown.Menu>
    </Dropdown>
    </Nav>
    </Container>
   </Navbar>
  )
}

export default Header