import React from 'react';
import "../components/Aboutcomp.css"
import ServiceTimer from "../components/ServiceTimer";
import Aboutvideoplay from "../images/functionvideo.mp4";

export default function Aboutcomp() {
  return (
    <div>
      <div className="aboutacontainer">
        <div className="aboutaleft">
          <p className="aboutAbout">About Us</p>
          <p className="aboutwelcome">Welcome to zeaglion</p>
          <p className="aboutAt">
            "At [Your Company Name], we are dedicated to providing exceptional
            service, innovation, and quality in everything we do. Our team is
            passionate about delivering tailored solutions that meet the unique
            needs of each customer, and we strive to build lasting relationships
            based on trust, integrity, and excellence."
          </p>
          <p className="aboutWel">
            "Welcome to [Hotel Name]! As the owner, it is my pleasure to ensure
            that your stay with us is nothing short of exceptional. Our team is
            dedicated to providing you with comfort, warmth, and personalized
            service. We look forward to making your visit memorable and
            enjoyable. Thank you for choosing us, and we hope to welcome you
            back soon!"<br></br>
            <br></br> - Owner of Zeaglion
          </p>
        </div>
        <div className="aboutright">
          <video autoPlay loop muted className="Aboutvideo">
            <source src={Aboutvideoplay} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <ServiceTimer />
        </div>
      </div>
    </div>
  )
}
