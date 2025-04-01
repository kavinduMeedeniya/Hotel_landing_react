import React from 'react';
import backvid from "../images/Aboutimages/1225.mp4";
import Aboutcomp from './Aboutcomp';
import Componentone from './Componentone';

export default function Avc() {
  return (
    <div className="background-video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <Componentone />
        <Aboutcomp />
      </div>
    </div>
  )
}
