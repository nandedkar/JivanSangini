import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Layout from "../layout/Layout";
import brand from "../../assets/images/jivan_sangini.jpg";
import logo from "../../assets/images/logo.jpg";
import "./header.scss";

class Header extends Component {
  render() {
    return (
      //Routing for navigation
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">
Jivan Sangini
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/product">
                Product
              </Nav.Link>
              <Nav.Link href="/aboutUs">
                About Us
              </Nav.Link>
              <Nav.Link href="/contactUs">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Navbar bg="light" variant="light" className="navbar fixed-top collapse navbar-collapse">
          <Navbar.Brand href="/">
            <img
              className="d-block"
              src={brand}
              alt="Logo slide"
              width="75px"
              height="50px"
            />
          </Navbar.Brand>
          <Nav className="mr-auto nav navbar-nav ">
            <Nav.Item>
              <Nav.Link href="/" isActive="active">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/product" isActive="active">Product</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/aboutUs" isActive="active">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contactUs" isActive="active">Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="mr-auto nav navbar-nav navbar-right">
            <img alt="brand" src={logo} width="200px" height="50px" />
          </Nav>
        </Navbar> */}
        <Layout />
      </>
    );
  }
}

export default Header;
