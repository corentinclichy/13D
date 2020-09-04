import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container-xl main main__about">
      <div className="about__wrapper">
        <div className="row about ">
          <div className="col-12 about__infos">
            <h1>ABOUT</h1>
            <p align="justify">
              Founded in 2019 by Clément Rougelot and Kevin Dolci, 13desserts is
              an <strong>independent design label</strong> with a{" "}
              <strong>multidisciplinary approach</strong>.<br />
              It brings together a{" "}
              <strong>unique selection of rend designers</strong>, all concerned
              with <strong>artisanal Know-how</strong> and working with{" "}
              <strong>high quality Materials</strong>.<br />
              The label proposes both the{" "}
              <strong>work of emerging designers</strong> and
              <strong>already established artists</strong> through annual
              collections edited in <strong>small series</strong> or{" "}
              <strong>limited and numbered editions.</strong>
            </p>
            <div className="about__contact">
              <p>You are a designer ? / You have project? </p>
              <a
                href="mailto:info@treize-desserts.com"
                target="_blank"
                rel="noopener noreferrer">
                Contact us
              </a>
              <a
                href="mailto:info@treize-desserts.com"
                target="_blank"
                rel="noopener noreferrer">
                DM us on instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
