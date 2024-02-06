import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import UserImg from "../images/user.svg";
import CartImg from "../images/cart.svg";

import Hero from "./Hero";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
const Header = () => {
  return (
    <>
      <Navbar
        className="custom-navbar"
        expand="md"
        bg="dark"
        variant="dark"
        aria-label="Furni navigation bar"
      >
        <Container>
          <Navbar.Brand href="index.html">
            Furni<span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarsFurni" />
          <Navbar.Collapse id="navbarsFurni">
            <Nav className="ms-auto mb-2 mb-md-0">
              <Nav.Item>
                <Nav.Link href="index.html">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="shop.html">Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="about.html">About us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="services.html">Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="blog.html">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="contact.html">Contact us</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ms-5">
              <Nav.Item>
                <Nav.Link href="#">
                  <img src={UserImg} alt="User" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="cart.html">
                  <img src={CartImg} alt="Cart" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Hero />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about.html" Component={About} />
          <Route path="/shop.html" Component={Shop} />
          <Route path="/services.html" Component={Services} />
          <Route path="/blog.html" Component={Blog} />
          <Route path="/contact.html" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Header;
