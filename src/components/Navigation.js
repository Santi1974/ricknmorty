import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <div className='main-navbar'>

          <Navbar.Brand>
            <div className='title'>
                <h1><span className='green'>Rick</span> <span className='blue'>and</span> <span className='green'>Morty</span> Encyclopedia</h1>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle onClick={toggleNavbar} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className={`${isCollapsed ? 'collapse' : ''}`}>
            <Nav className='links'>
              <div>
              <Nav.Link as={NavLink} to="/">
                <div className='item'><div class="arrow-right"></div>Characters</div>
              </Nav.Link>
              <div className='bar'></div>
              </div>
              <div>
              <Nav.Link as={NavLink} to="/episodes">
                <div className='item'><div class="arrow-right"></div>Episodes</div>
              </Nav.Link>
              <div className='bar'></div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Navigation