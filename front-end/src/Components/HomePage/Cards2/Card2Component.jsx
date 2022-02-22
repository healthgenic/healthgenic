import React, { Component } from "react";
import { Link } from "react-router-dom";
import image1 from "./12.png";
import image2 from "./13.jpg";
import image3 from "./bb.jpg";
import image4 from "./11.jpg";

export default class Card2Compnent extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <h3 className="mb-5">Shop by Category</h3>

          <div class="card-deck">
            <div className="col-3">
              <img src={image1} className="card-img-top rounded-3" alt="..." />
              <div className="card-body text-center">
                <a href="#" className="btn btn-outline-success">
                  Covid Essentials
                </a>
              </div>
            </div>

            <div className="col-3">
              <img src={image2} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <a href="#" className="btn btn-outline-success">
                  Ayurveda Products
                </a>
              </div>
            </div>

            <div className="col-3">
              <img src={image3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <a href="#" className="btn btn-outline-success">
                  Baby Care
                </a>
              </div>
            </div>

            <div className="col-3">
              <img src={image4} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <a href="#" className="btn btn-outline-success">
                  Medical Devices
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
