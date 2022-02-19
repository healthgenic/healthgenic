import React, { Component } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import image1 from "./dr-online-consultation.png";
import image2 from "./OnlineMedi.jpg";
import image3 from "./BookLab.jpg";
import "./carousel.css"

class ControlledCarousel extends Component {
  render() {
    return (
      <div>
       
       <Carousel variant="dark" className="carousel img-fluid">
              <Carousel.Item interval={15} className="carousel-item">
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="text-dark">Online Docter Consultation</h3>
                  <p>HealthGenic Assures you best medical services</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500000}>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 className="text-dark">Buy Medicines with us</h3>
                  <p>Medicines & HealthProducts at Affortable prices</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={50}>
                <img
                  className="d-block w-100"
                  src={image3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 className="text-dark">Take Pathological Tests</h3>
                  <p>Wide range of Pathological test at affortable cost </p>
                </Carousel.Caption>
              </Carousel.Item>
</Carousel>


      </div>
    );
  }
}

export default ControlledCarousel;



  