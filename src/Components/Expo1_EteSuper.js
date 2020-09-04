import React from "react";
import Furniture from "./Furniture.js";
import "./Expo1_EteSuper.css";
import table from "../img/13Desserts_expo-Table-basse.jpg";
import all2 from "../img/13Desserts_all2.jpg";
import all3 from "../img/13Desserts_all3.jpg";
import all6 from "../img/13Desserts_ODD-MATTER.jpg";
import all7 from "../img/13Desserts-x-Dylan-CASASNOVAS-Lea-MESTRES.jpg";

function Expo1_EteSuper() {
  return (
    <div className="container-xl">
      <div className="exhibition__wrapper">
        <div className="one presentation">
          <h1>EXPO.O1</h1>
          <p>
            For his first exhibition entitled <strong>Été Super</strong>,{" "}
            <strong>13Desserts</strong> links up with{" "}
            <strong>Temple magazine</strong>.
          </p>
          <p>
            <strong>Été Super</strong> presents around 30 pieces, from 3D
            ceramic printed vases from Bold Design, to{" "}
            <strong>mural weaves made by Marie Schumann</strong> and the edition
            of a <strong>chair in partnership with Fredrik Paulsen.</strong>{" "}
          </p>
          <p>
            Thought as a modern interpretation of the French Riviera, the
            exhibition welcomes{" "}
            <strong>artists, and multidisciplinary designers </strong>
            through the curation and the production of specific pieces.
          </p>
          <p class="location">
            <strong>13Desserts gallery</strong>{" "}
            <em>- 21 place de la république, Hyères. France</em>
          </p>
        </div>
        <div className="two">
          <div className="card">
            <img src={all3} className=" img" alt="" />
          </div>
          <p className="caption_underImage">
            Table <em>by 13Desserts</em>, Textile <em>by Marie Schumann</em>,
            Mirror <em>by Marine Sartori & 13Desserts</em>, <br />
            Chair <em>by 13Desserts</em>
          </p>
        </div>
        <div className="img1">
          <div className="card">
            <img src={all2} className="img-fluid img" alt="" />
            <p className="caption">
              Vase <em>by Superpoly</em>, textile <em>by Marie Schumann</em>,
              sculptures <em>by Olivier Milliagou</em>, chair{" "}
              <em>by Soft BaroqueTable</em>
            </p>
          </div>
        </div>
        <div className="img1_1">
          <div className="card">
            <img src={all6} className="img-fluid img" alt="" />
            <p className="caption">
              Vase <em>by Superpoly</em>, textile <em>by Marie Schumann</em>,
              sculptures <em>by Olivier Milliagou</em>, chair{" "}
              <em>by Soft BaroqueTable</em>
            </p>
          </div>
        </div>
        <div className="quote_ideat">
          <p>
            "Français ou internationaux, designers ou artistes
            pluridisciplinaires, les profils se suivent sans se ressembler. Seul
            point commun : le goût des pièces qui sortent de l’ordinaire,
            rompent avec la banalité et se libèrent des carcans du
            fonctionnalisme."
          </p>
          <quote>- IDEAT Contemporary life </quote>
        </div>
        {/*         <div className="img1_2">
          <div className="card">
            <img src={all6} className="img-fluid img" alt="" />
            <p className="caption">
              Table <em>by 13Desserts</em> , Textile <em>by Marie Schumann</em>,
              Mirror <em>by Marine Sartori & 13Desserts</em> Chair
              <em>by 13Desserts</em>
            </p>
          </div>
        </div>

        <div className="seven">
          <div className="card">
            <img src={all7} className="img-fluid img" alt="" />
            <p className="caption">
              Table <em>by 13Desserts</em> , Textile <em>by Marie Schumann</em>,
              Mirror <em>by Marine Sartori & 13Desserts</em>
              <br />
              Chair<em>by 13Desserts</em>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Expo1_EteSuper;

/* 
<h1>EXPO.01</h1>
<h4>A modern interpretation of the french riviera</h4>
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
</p> */
