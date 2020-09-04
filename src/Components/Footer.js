import React from "react";
import logo13D from "../img/13D.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="container-fluid footer">
      <div className="footer__about ">
        <p>DESIGN LABEL / CREATIVE STUDIO</p>
      </div>
      <div className="footer__adress d-none d-lg-flex">
        <p>
          <a href="#">PARIS</a> / <a href="#">HYERES </a> -
          <a href=""> (+33)0135342541</a>
        </p>
      </div>
      <div className="footer__socialContact">
        <a href="https://www.instagram.com/13.desserts" target="_blank">
          INSTAGRAM
        </a>
        <a
          href="mailto:info@treize-desserts.com"
          target="_blank"
          rel="noopener noreferrer">
          YOU HAVE TALENT, JOIN US
        </a>
        <a
          className="order"
          href="mailto:info@treize-desserts.com"
          target="_blank"
          rel="noopener noreferrer">
          I WANT TO PASS AN ORDER.
        </a>
      </div>
      <div className="footer__copywrite">
        <img src={logo13D} className="copywrite__logo img-fluid" alt="" />
        <p className="copywrite__text">© 2020</p>
      </div>
    </footer>
  );
}

export default Footer;
