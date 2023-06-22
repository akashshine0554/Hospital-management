import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const NavbarnewComp = () => {
    return (
        <>
            <div className='navbardiv'>
                <Navbar expand="lg" className='navbar fixed-top'>
                    <Container fluid>
                        <img className='logo' src="https://motherhoodindia.com/indore-birthing-brand/images/logo.png" alt="logo" />
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <NavLink to='homeComp' className='nav-link'>Home</NavLink>
                                <NavLink to='aboutComp' className='nav-link'>About</NavLink>
                                <NavLink to='apointmentComp' className='nav-link'>Appointment</NavLink>
                                <NavLink to='dischargeComp' className='nav-link'>Discharge</NavLink>

                                <NavDropdown title=" Emergency Help" id="navbarScrollingDropdown">
                                    <NavDropdown.Item>
                                        <NavLink to='ambulanceComp' className='nav-link'>Request For Ambulance</NavLink>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item>
                                        <NavLink to='doctorComp' className='nav-link'>Call Doctor At Home</NavLink>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item>
                                        <NavLink to='roomComp' className='nav-link'>Reservation for Room</NavLink>
                                    </NavDropdown.Item>

                                </NavDropdown>

                                <NavLink to='admincomp' className='nav-link'>Admin</NavLink>


                            </Nav>


                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-primary">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </>
    )
}

export default NavbarnewComp