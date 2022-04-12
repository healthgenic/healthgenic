import React, { Component } from "react";
import image1 from "./dr105.jpg";
import image2 from "./dr102.jpg";
import image3 from "./dr103.jpg";
import image4 from "./dr104.jpg";
import { Link } from "react-router-dom";
// import "./Card1.css";

export default class VCard2Component extends Component {
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
                  <h4 className="card-title">Dr. Bean</h4>
                  <p className="card-text text-secondary">
                    Pediatrics
                  </p>
                  <Link to="#" className="btn text-primary">
                    Consult Now
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
                  <h4 className="card-title">Dr. Rian Ramirez</h4>
                  <p className="card-text text-secondary">
                    Psychiatrics
                  </p>
                  <Link to="#" className="btn text-primary">
                    Consult Now
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
                  <h4 className="card-title">Dr. Dalton Ngangi</h4>
                  <p className="card-text text-secondary">
                    Stomach & Digestion
                  </p>
                  <Link to="#" className="btn text-primary">
                    Consult Now
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
                  <h4 className="card-title">Dr. Siednji Leon</h4>
                  <p className="card-text text-secondary">
                    General Physician
                  </p>
                  <Link to="#" className="btn text-primary">
                    Consult Now
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
