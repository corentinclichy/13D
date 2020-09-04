import React from "react";
import { Link } from "react-router-dom";
import "./FullpageMenu.css";

function FullpageMenu() {
  const hidenav = () => {
    console.log("click");
    document.getElementById("toggle").checked = false;
  };

  return (
    <div>
      <header>
        <input type="checkbox" id="toggle" style={{ display: "none" }} />
        <label class="toggle-btn toggle-btn__cross" for="toggle">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </label>
        <nav id="fullPageNav">
          <ul>
            <li className="link">
              <Link to="/about" onClick={hidenav}>
                <a onclick="">ABOUT</a>
              </Link>
            </li>
            <li className="link">
              <Link to="collection" onClick={hidenav}>
                <a href="#">COLLECTION</a>
              </Link>
            </li>
            <li className="link" onClick={hidenav}>
              <Link>
                <a href="#">SHOP</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default FullpageMenu;
