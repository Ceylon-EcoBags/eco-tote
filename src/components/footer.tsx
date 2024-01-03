import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import the envelope icon from the correct package

export default function Footer() {
  return (
    <footer className="footer-home">
      <div>
        <a
          href="https://www.facebook.com/your-facebook-page-url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-page-url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:greenproductslk@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <p>© 2023 EcoCraft. All rights reserved.</p>
    </footer>
  );
}
