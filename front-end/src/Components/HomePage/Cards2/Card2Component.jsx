import React, { Component } from "react";
import { Link } from "react-router-dom";
import image1 from "./12.png";
import image2 from "./13.jpg";
import image3 from "./14.jpg";
import image4 from "./11.jpg";



export default class extends Component {

  render() {
    return (
      <div>
        <div className="container mt-5">
          <h3 className="mb-5">Shop by Category</h3>

          <div class="card-deck">
            <div className="col-3">
              <img src={image1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                 <a href="http://localhost:3000/home/covidEssential" className="btn btn-outline-success">
                  Covid Essentials
                </a> 
               
              </div>
            </div>

            <div className="col-3">
              <img src={image2} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <a href="http://localhost:3000/home/Ayurveda" className="btn btn-outline-success" >
                  Ayurveda Products
                </a>
              </div>
            </div>

            <div className="col-3">
              <img src={image3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <a href="http://localhost:3000/home/Medicines" className="btn btn-outline-success">
                  Medicines
                </a>
              </div>
            </div>

            <div className="col-3">
              <img src={image4} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <a href="http://localhost:3000/home/MedicalDevice" className="btn btn-outline-success">
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
