import React, { useEffect, useState } from "react";
import "./landing-page.css";
import logoIconSvg from "../assets/logo-icon.svg";
import logoTextSvg from "../assets/logo-text.svg";
import heroImgSvg from "../assets/hero.svg";
import callToActionArrowSvg from "../assets/call-to-action-arrow.svg";
import callToActionArrowHoverSvg from "../assets/call-to-action-arrow-hover.svg";

export default function LandingPage() {
  const [callToActionButtonIsHovered, setCallToActionButtonIsHovered] =
    useState(false);

  useEffect(() => {
    document.title = "Happy | Leve felicidade para o mundo";
  }, []);

  return (
    <div className="landing-page-content">
      <div className="row">
        <div className="logo-container">
          <img className="logo-img" src={logoIconSvg} />
          <img className="logo-text" src={logoTextSvg} />
        </div>
        <div className="city-text">
          <p>
            <strong>Aquiraz</strong>
            <br />
            Ceará
          </p>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={heroImgSvg} />
      </div>
      <div className="row">
        <div className="hero-text-container">
          <h2>
            Leve
            <br />
            felicidade
            <br />
            para o<br />
            mundo
          </h2>
          <p>
            Visite orfanatos e mude o dia
            <br /> de muitas crianças.
          </p>
        </div>
        <div className="call-to-action">
          <button
            onMouseOver={() => setCallToActionButtonIsHovered(true)}
            onMouseLeave={() => setCallToActionButtonIsHovered(false)}
          >
            <img
              src={
                callToActionButtonIsHovered
                  ? callToActionArrowHoverSvg
                  : callToActionArrowSvg
              }
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}
