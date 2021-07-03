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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Layout />
      </>
    );
  }
}

export default Header;
