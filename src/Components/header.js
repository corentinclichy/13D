import React from "react";
import "./header.css";
import logo13Desserts from "../img/13DESSERTS.png";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="container-fluid">
      <div className="row header ">
        <div className="col-2 brand">
          <Link to="/">
            <img src={logo13Desserts} alt="" className="logo" />
          </Link>
        </div>

        <div className="col-10 header__menu d-none d-lg-flex">
          <p>
            <Link to="/about">
              <a className="hover">ABOUT</a>
            </Link>
            /
            <Link to="/collection">
              <a className="hover"> COLLECTION </a>
            </Link>
            /
            <a className="hover" href="#">
              GALLERY
            </a>{" "}
            /
            <a className="hover" href="#">
              PRESS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default header;
