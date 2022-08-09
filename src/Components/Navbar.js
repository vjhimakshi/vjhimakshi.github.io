import React, { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import {  CgFileDocument } from "react-icons/cg";
import { MdOutlineContactMail,MdWork,MdCastForEducation } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser
} from "react-icons/ai";

function NavBar() {
    const [expand, setExpand] = useState(false);
  
    return (
    <Navbar collapseOnSelect fixed="top" expanded={expand} expand="md" className="navbox">
        <Container > 
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className="me-auto ">
                    <Nav.Link href="/#home" onClick={() => setExpand(false)}>                        
                        <p>
                            <AiOutlineHome />&nbsp; Home
                        </p>
                    </Nav.Link>
                    <Nav.Link href="/#skills" onClick={() => setExpand(false)}>
                        <p>
                        <AiOutlineUser/>&nbsp; Skills
                        </p>
                    </Nav.Link>
                    <Nav.Link href="/#education" onClick={() => setExpand(false)}>
                        <p>
                        <MdCastForEducation/>&nbsp; Education
                        </p>
                    </Nav.Link>
                    <Nav.Link href="/#projects" onClick={() => setExpand(false)}>
                        <p>
                            <AiOutlineFundProjectionScreen/>&nbsp; Projects
                        </p>
                    </Nav.Link>
                    <Nav.Link href="/#experience" onClick={() => setExpand(false)}>
                        <p>
                            <MdWork/>&nbsp; Work Experience
                        </p>
                    </Nav.Link>
                    <Nav.Link href="/#contact" onClick={() => setExpand(false)}>
                        <p>
                            <MdOutlineContactMail />&nbsp; Contact
                        </p>
                    </Nav.Link>
                    <Nav.Link href="/resume" onClick={() => setExpand(false)}  style={{marginLeft:'20rem'}}>
                        <p>
                            <CgFileDocument />&nbsp; Resume
                        </p>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default NavBar;