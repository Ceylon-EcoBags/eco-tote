import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isLinkActive = (href: string) => {
    return router.pathname === href ? "active-link" : "";
  };

  return (
    <ul className="nav" style={{ listStyleType: "none", padding: 0 }}>
      <li className={isLinkActive("/")}>
        <Link href="/">Home</Link>
      </li>
      <li className={isLinkActive("/about")}>
        <Link href="/about">About</Link>
      </li>
      <li className={isLinkActive("/shop")}>
        <Link href="/shop">Bags</Link>
      </li>
      <li className={isLinkActive("/contact")}>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}
