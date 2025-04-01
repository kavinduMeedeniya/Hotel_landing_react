import React from "react";
import "./Fourthcontent.css";
import bgvideo from "../images/functionvideo.mp4";

export default function Fourthcontent() {
  return (
    <div className="fourthcontent-container">
      <div className="video-container">
        <video autoPlay loop muted className="backvideo">
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content-overlay">
        <p className="exquisite">EXQUISITE FUNCTION SPACES</p>
        <p className="provide">
          "We provide high-standard function spaces designed to elevate your
          events. Whether it's a wedding, corporate gathering, or special
          celebration, our venues offer exceptional facilities, sophisticated
          decor, and personalized service to make your event unforgettable."
        </p>
        <div className="butt05">
          <button className="boton-elegante">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
