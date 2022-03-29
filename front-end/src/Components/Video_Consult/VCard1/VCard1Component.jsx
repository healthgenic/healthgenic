import React, { Component } from "react";
import image1 from "./dr11.jpg";
import image2 from "./dr22.jpg";
import image3 from "./dr3.jpg";
import image4 from "./dr4.jpg";
import { Link } from "react-router-dom";
// import "./Card1.css";

export default class VCard1Component extends Component {
  render() {
    return (
      <div>
        <div className="container justify-content-center mt-5 ">
        <h2 className="mb-3">Our Doctors</h2>
          <div className="row">
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image1} alt="img1" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Dr. Bruno Rodrigues</h4>
                  <p className="card-text text-secondary">
                    General Physician
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
                  <h4 className="card-title">Dr. Saiysha Irani</h4>
                  <p className="card-text text-secondary">
                   Gynaecology
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
                  <h4 className="card-title">Dr. Ashkan Faze</h4>
                  <p className="card-text text-secondary">
                    Urology
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
                  <h4 className="card-title">Dr. Larissa Ronald</h4>
                  <p className="card-text text-secondary">
                    Dermatology
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
