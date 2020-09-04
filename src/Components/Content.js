import React from "react";
import "./Content.css";
import imgExpo from "../img/13Desserts_all4.jpg";
import logoIdeat from "../img/logo-ideat-2x.png";
import logoSightUnSeen from "../img/su-logo--big.svg";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="container-xl main">
      <div className="banner__wrapper">
        <div className="row">
          <div className="col-lg-4 banner__description d-none d-lg-flex">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              id quo nesciunt quis. Nam mollitia dolore doloribus quisquam,
              aperiam similique voluptas ipsam, magnam id officia repudiandae.
              Dolorum pariatur perferendis ad?
            </p>
            <div className="logo__press">
              <a href="">
                <img className="logo_press1" src={logoIdeat} alt="" />
              </a>
              <a href="">
                <img className="logo_press2" src={logoSightUnSeen} alt="" />
              </a>
            </div>
            <Link to="/exhibitions/expo1_etesuper">
              <div className="button">
                <a class="btn-slice">
                  <div class="top">
                    <span>EXPLORE THE EXHIBITION</span>
                  </div>
                  <div class="bottom">
                    <span>EXPLORE THE EXHIBITION</span>
                  </div>
                </a>
              </div>
            </Link>
          </div>
          <div className="col-12 col-lg-8 banner">
            <div className="img__expo">
              <div className="banner__text">
                <h1>EXPO.O1</h1>
                <h4>10.08.2020 - 28.08.2020 / Hyères, France</h4>
              </div>
              <div className="img">
                <img src={imgExpo} alt="" className="img-fluid" />
                <div className="sidebar_SmallScreen ">
                  <div className="sidebar_SmallScreen__animBanner"></div>
                </div>
              </div>
            </div>

            <div className="button__mobile d-lg-none ">
              <a class="button__mobile" href="#">
                Explore the collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
