import React, { Component } from "react";
import { Link } from "react-router-dom";
import image1 from "./n1.png";
import image2 from "./h1.png";
import image3 from "./c1.png";
import image4 from "./or1.png";
import image5 from "./g1.png";
import image6 from "./o1.png";

export default class Card4Component extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          
        <h3 className="mb-5">
          Our Best Services
        </h3>
          <div class="card-deck row">
            <div className="col-6 my-2 col-lg-3">
            <img src={image1} className="card-img-top border  rounded" alt="neuro" />
              <div className="card-body text-center">
              <h5>Neurology</h5>
              </div>
            </div>    

            <div className="col-6 my-2 col-lg-3">
            <img src={image2} className="card-img-top border rounded" alt="hema" />
              <div className="card-body text-center">
              <h5>Hematology</h5>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-3">
              <img src={image3} className="card-img-top border rounded" alt="cardio" />
              <div className="card-body text-center">
                <h5>Cardiology</h5>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-3">
            <img src={image4} className="card-img-top border rounded" alt="ortho" />
              <div className="card-body text-center">
              <h5>Orthopedics</h5>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-3">
              <img src={image5} className="card-img-top border rounded" alt="gastro" />
              <div className="card-body text-center">
                <h5>Gastrology</h5>
              </div>
            </div>
            
            <div className="col-6 my-2 col-lg-3">              
              <img src={image6} className="card-img-top border rounded" alt="optha" />
              <div className="card-body text-center">
                <h5>Ophthalmology</h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
