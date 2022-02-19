import React, { Component } from "react";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import { Link } from "react-router-dom";
import "./Card1.css";

export default class Card1component extends Component {
  render() {
    return (
      <div>
        <div className="container justify-content-center mt-5 ">
          <div className="row">
            <div className="col-md-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image1} alt="img1" className="card-img-top" />
                </div>
                <div className="card-body  text-dark">
                  <h4 className="card-title">Online Consultation</h4>
                  <p className="card-text text-secondary">
                    Connect within 60sec
                  </p>
                  <a href="#" className="btn btn-outline-success">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image2} alt="img2" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Medical Supplies</h4>
                  <p className="card-text text-secondary">
                    Essentials at your Doorstep
                  </p>
                  <a href="#" className="btn btn-outline-success">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image3} alt="img3" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Lab Tests</h4>
                  <p className="card-text text-secondary">
                    Sample pickup at your Home
                  </p>
                  <a href="#" className="btn btn-outline-success">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image4} alt="img4" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Find Doctor</h4>
                  <p className="card-text text-secondary">
                    Confirmed appointments
                  </p>
                  <a href="#" className="btn btn-outline-success">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
