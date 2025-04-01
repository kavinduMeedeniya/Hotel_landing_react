import React from "react";
import Componentone from "../components/Componentone";
import "../gallarycomponents/gallary.css";


import imgg01 from "../gallarycomponents/galleryimg/gimg01.jpg"
import imgg02 from "../gallarycomponents/galleryimg/gimg02.jpg"
import imgg03 from "../gallarycomponents/galleryimg/gimg03.jpg"
import imgg04 from "../gallarycomponents/galleryimg/gimg04.jpg"
import imgg05 from "../gallarycomponents/galleryimg/gimg05.jpg"
import imgg06 from "../gallarycomponents/galleryimg/gimg06.jpg"
import imgg07 from "../gallarycomponents/galleryimg/gimg07.jpg"
import imgg08 from "../gallarycomponents/galleryimg/gimg08.jpg"
import imgg09 from "../gallarycomponents/galleryimg/gimg09.jpg"
import imgg10 from "../gallarycomponents/galleryimg/gimg10.jpg"
import imgg11 from "../gallarycomponents/galleryimg/gimg11.jpg"
import imgg12 from "../gallarycomponents/galleryimg/gimg12.jpg"
import imgg13 from "../gallarycomponents/galleryimg/gimg13.jpg"
import imgg14 from "../gallarycomponents/galleryimg/gimg14.jpg"
import imgg15 from "../gallarycomponents/galleryimg/gimg15.jpg"
import imgg16 from "../gallarycomponents/galleryimg/gimg16.jpg"

export default function Gallery() {
  return (
    <div>
      <Componentone />
      <p className="gallary_topic">
        Discover the Essence of Elegance: Our Hotel in Pictures
      </p>
      <p className="gallery_para">
        Step into a world of unparalleled luxury and charm through our curated
        gallery. Each image captures the essence of our hotel’s exquisite
        interiors, serene landscapes, and delightful amenities. From tranquil
        rooms to gourmet dining and relaxing leisure spaces, explore what makes
        our hotel your perfect retreat. Let the pictures inspire your next
        unforgettable stay with us.
      </p>

      <div className="main-wrapper">
        <div className="imagecontainer">
          <img
            src={imgg01}
            alt="pic 1"
          />
          <img
            src={imgg02}
            alt="pic 2"
          />
          <img
            src={imgg03}
            alt="pic 3"
          />
          <img
            src={imgg04}
            alt="pic 4"
          />
          <img
            src={imgg05}
            alt="pic 5"
          />
          <img
            src={imgg06}
            alt="pic 6"
          />
          <img
            src={imgg07}
            alt="pic 7"
          />
          <img
            src={imgg08}
            alt="pic 8"
          />
          <img
            src={imgg09}
            alt="pic 9"
          />
          <img
            src={imgg10}
            alt="pic 10"
          />
          <img
            src={imgg11}
            alt="pic 11"
          />
          <img
            src={imgg12}
            alt="pic 12"
          />
          <img
            src={imgg13}
            alt="pic 13"
          />
          <img
            src={imgg14}
            alt="pic 14"
          />
          <img
            src={imgg15}
            alt="pic 15"
          />
          <img
            src={imgg16}
            alt="pic 16"
          />
        </div>
      </div>
    </div>
  );
}
