import React from "react";
import "./Fit.css";
import FitImage from "../../../../assets/fit-beanie.jpg";
import FullFitImage from "../../../../assets/full-fit.png";
import FitTopImage from "../../../../assets/fit-item-top.png";
import FitBotImage from "../../../../assets/fit-item-bot.jpg";

function Fit() {
  return (
    <div className="Fit-Wrapper">
      <div className="Fit-Image">
        <img src={FitImage} alt="" />
      </div>
      <div className="Mens-Title">GET THE FIT</div>
      <div className="Fit-Items">
        <div className="Full-Fit-Image">
          <img src={FullFitImage} alt="" />
        </div>
        <div className="Fit-Item-Wrapper">
          <div className="fit-image-hover-container">
            <img src={FitTopImage} alt="" className="fit-image-hover-image" />
            <div
              style={{ paddingBottom: "100px" }}
              className="fit-image-hover-overlay"
            >
              <img src={FitBotImage} className="image-hover-image" alt="" />
              <p style={{ marginTop: "5px" }}>TACTICAL JOGGERS - LIGHT BLUE</p>
              <p className="Fit-Item-Wrapper-Price">78.95€</p>
            </div>
          </div>
          <p>TACTICAL VEST - LIGHT BLUE</p>
          <p className="Fit-Item-Wrapper-Price">49.95€</p>
          <button className="btn effect01" target="_blank">
            <span>VIEW THIS OUTFIT</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fit;
