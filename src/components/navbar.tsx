import React from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import styles from "./navbar.module.css"; // Ensure this path is correct

export default function YourNavbar() {
  const router = useRouter();

  return (
    <Navbar
      expand="lg"
      variant="light"
      className={styles.navbarContainer}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/" className={styles.navbarBrand}>
          <Image src="/img/logo2.svg" alt="Logo" width={125} height={125} />
          <span className={styles.navbarLogoText}>EcoCraft</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              active={router.pathname === "/"}
              className={styles.navLink}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              active={router.pathname === "/about"}
              className={styles.navLink}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/shop"
              active={router.pathname === "/shop"}
              className={styles.navLink}
            >
              Products
            </Nav.Link>
            <Nav.Link
              href="/contact"
              active={router.pathname === "/contact"}
              className={styles.navLink}
            >
              Contact Us
            </Nav.Link>
            {/* Add more Nav.Link items as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
