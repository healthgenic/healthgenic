import React, { Component } from "react";
import image1 from "./1.png";
import image2 from "./21.jpeg";
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
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image1} alt="img1" className="card-img-top" />
                </div>
                <div className="card-body  text-dark">
                  <h4 className="card-title">Onine Consultation</h4>
                  <p className="card-text text-secondary">
                    Connect within 60sec
                  </p>
                  <Link to="/consult" className="btn btn-outline-success">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image2} alt="img2" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Medical Supplies</h4>
                  <p className="card-text text-secondary">
                    Essentials at your Doorstep
                  </p>
                  <Link to="/Epharma/Medicines" className="btn btn-outline-success">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
             <div className="col-6 my-2 col-lg-3"> 
              <div className="card text-center">
                <div className="overflow">
                  <img src={image3} alt="img3" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Lab Tests</h4>
                  <p className="card-text text-secondary">
                    Sample pickup at your Home
                  </p>
                  <Link to="#" className="btn btn-outline-success">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image4} alt="img4" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Find Doctor</h4>
                  <p className="card-text text-secondary">
                    Confirmed appointments
                  </p>
                  <Link to="/SearchDr" className="btn btn-outline-success">
                   Find Doctor
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
