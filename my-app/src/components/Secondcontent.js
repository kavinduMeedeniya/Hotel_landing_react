import React from "react";
import "./Secondcontent.css";
import image01 from "../images/secondcontimgs/imgs1.jpeg";
import image02 from "../images/secondcontimgs/imgs2.jpeg";
import { Link } from "react-router-dom";

export default function Secondcontent() {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="left">
          <img src={image01} alt="somepic 1" />
          <img src={image02} alt="somepic 2" />
        </div>
        <div className="right">
          <h1>Welcome to Zeaglion</h1>
          <p className="firstpara">
            Experience comfort, luxury, and exceptional hospitality—your perfect
            getaway starts here.
          </p>
          <p className="secondpara">
            "Welcome to our website! We're delighted to have you here. Whether
            you're planning a relaxing getaway, a special event, or looking for
            top-notch services, we are committed to making your experience
            exceptional. Explore our offerings and let us help you create
            memorable moments."
          </p>
          <Link to="/about">
            <button className="butt">About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
