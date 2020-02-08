import React from 'react';
import logo from './logo.svg';
import ProductList from './pages/productList/index.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
    return (
        <div className="main">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Hi
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <header className="header home-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Hey everyone and welcome to sock mania
                </p>
                <a
                    className="link"
                    rel="noopener noreferrer"
                >
                    Product
                </a>
                <ProductList name="Sock1"/>
            </header>
        </div>
    );
}

export default App;
