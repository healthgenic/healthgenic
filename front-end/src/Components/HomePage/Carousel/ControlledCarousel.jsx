import React, { Component } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import image1 from "./333.webp";
import image2 from "./10.jpg";
import image3 from "./2.jpg";

import "./carousel.css";

class ControlledCarousel extends Component {
  render() {
    return (
      
      <div className="justify-content-center ">
        <Carousel variant="dark" className="carousel img-fluid">
          <Carousel.Item interval={5000}>
            <img className="d-block  w-100" src={image3} alt="First slide" />
            <Carousel.Caption>
              <h2 className="text-dark text-right">Take Pathological Tests</h2>
              <h5 className="text-success text-right">
                "Up To 75% OFF" On Lab test and Health Packages
              </h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000} className="carousel-item ">
            <img className="d-block  w-100" src={image1} alt="Second slide" />
            <Carousel.Caption>
              <h1 className="text-dark">Online Docter Consultation</h1>
              <h4 className="text-white-100">HealthGenic Assures you best medical services</h4>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className="d-block  w-100" src={image2} alt="Third slide" />
            <Carousel.Caption>
              <h1 className="text-light text-left">Buy Medicines with us</h1>
              <h3 className="text-white-50 text-left">Medicines & HealthProducts at Affortable prices</h3>
              
            </Carousel.Caption>
          </Carousel.Item>

          

        </Carousel>
      </div>
      
    );
  }
}

export default ControlledCarousel;
