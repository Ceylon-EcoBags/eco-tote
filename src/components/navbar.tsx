import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isLinkActive = (href: string) => {
    return router.pathname === href ? "active-link" : "";
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header className="navbar">
      <div
        className="logo-container"
        onClick={() => handleNavigation("/")}
        style={{ cursor: "pointer" }}
      >
        <Image src="/img/logo2.png" alt="Logo" width={125} height={125} />
        <span
          className="logo-text"
          style={{ marginLeft: "0px", cursor: "pointer" }}
        >
          EcoCraft
        </span>
      </div>

      <nav className="nav">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li
            className={isLinkActive("/")}
            onClick={() => handleNavigation("/")}
            style={{ cursor: "pointer" }}
          >
            Home
          </li>
          <li
            className={isLinkActive("/about")}
            onClick={() => handleNavigation("/about")}
            style={{ cursor: "pointer" }}
          >
            About
          </li>
          <li
            className={isLinkActive("/shop")}
            onClick={() => handleNavigation("/shop")}
            style={{ cursor: "pointer" }}
          >
            Bags
          </li>
          <li
            className={isLinkActive("/contact")}
            onClick={() => handleNavigation("/contact")}
            style={{ cursor: "pointer" }}
          >
            Contact Us
          </li>
        </ul>
      </nav>
    </header>
  );
}
