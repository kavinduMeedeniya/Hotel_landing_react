import React from "react";
import "./Firstcontent.css";
import backgroundvideo from "../images/homevedio.mp4";

export default function Firstcontent() {
  return (
    <div className="first_full">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="topicHotel">Enjoy Your Dream Vacation</p>
      <p className="topicDes">
        "Welcome to your home away from home, where comfort meets luxury.
        Whether you're here for relaxation, romance, or adventure, we promise an
        unforgettable experience designed just for you."
      </p>
      <div className="buttoncontainer">
        <button className="button02">Reservations</button>
      </div>
      <div className="image-container">
        <div className="boxone image"></div>
        <div className="boxtwo image"></div>
        <div className="boxthree image"></div>
        <div className="boxfour image"></div>
      </div>
    </div>
  );
}
