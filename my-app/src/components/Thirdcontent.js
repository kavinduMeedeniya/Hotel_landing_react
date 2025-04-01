import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Thirdcontent.css";
import roomimage01 from "../images/thirdcontimgs/room01.jpeg";
import roomimage02 from "../images/thirdcontimgs/room02.jpeg";
import roomimage03 from "../images/thirdcontimgs/room03.jpeg";

export default function Thirdcontent() {
  return (
    <div className="thirdfull">
      <p className="our_rooms">Our Rooms</p>
      <p className="experiance">
        Experience comfort and elegance in our thoughtfully designed rooms.
        Whether you're here for business or leisure, each room offers modern
        amenities, cozy furnishings, and a serene ambiance to ensure a restful
        stay. Discover the perfect space to relax and recharge with us.
      </p>

      <div className="cardclass">
        <Card style={{ width: "18rem" }} className="cardstyle">
          <Card.Img className="imagesize" variant="top" src={roomimage01} />
          <Card.Body>
            <Card.Title className="roomtitle">Standard Room</Card.Title>
            <Card.Text className="roomdescrip">
              Cozy and well-equipped, our Standard Rooms offer confirt and
              convenience for a relaxing stay
            </Card.Text>
            <Button variant="primary" className="but04">Book Now</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="cardstyle">
          <Card.Img className="imagesize"  variant="top" src={roomimage02} />
          <Card.Body>
            <Card.Title className="roomtitle">Deluxe Room</Card.Title>
            <Card.Text  className="roomdescrip">
              Enjoy spacious confort and upgarded amenities for a refined guest
              expreience.saty here
            </Card.Text>
            <Button variant="primary" className="but04">Book Now</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="cardstyle">
          <Card.Img className="imagesize"  variant="top" src={roomimage03} />
          <Card.Body>
            <Card.Title className="roomtitle">Luxury Room</Card.Title>
            <Card.Text className="roomdescrip">
              Indulge in elegance with premium amenties and plush comfort for a
              truly luxurious stay
            </Card.Text>
            <Button variant="primary" className="but04">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
