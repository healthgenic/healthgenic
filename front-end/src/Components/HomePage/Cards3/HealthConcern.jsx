import React, { Component } from "react";
import "./card3.css";
import { Link } from "react-router-dom";
import image1 from "./bb1.jpg";
import image2 from "./fever-cold-or-flu.jpg";
import image3 from "./child.jpg";
import image4 from "./depression.jfif";
import image5 from "./Heart.jfif";
import image6 from "./b.jpg";

export default class HealthConcern extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h3 className="mb-5">
          Consult top doctors online for any health concern
        </h3>

       

          <div class="card-deck rounded-pill">
            <div className="col-2 ">
            <img src={image1} className="card-img-top rounded-circle" alt="neuro" />
            <div className="text-center">
              <Link to="/" className="text-center text-success">
                Acne<br/>Pimple<br/>Skin issue
              </Link>
            </div>
            </div> 

            <div className="col-2 ">
            <img src={image2} className="card-img-top rounded-circle" alt="neuro" />
            <div className="text-center">
              <Link to="/" className="text-center text-success">
                Cough-Cold<br/>Fever
              </Link>
            </div>
            </div> 

            <div className="col-2 ">
            <img src={image3} className="card-img-top rounded-circle" alt="neuro" />
            <div className="text-center">
              <Link to="/" className="text-center text-success">
                Child Health
              </Link>
            </div>
            </div>

            <div className="col-2 ">
            <img src={image4} className="card-img-top rounded-circle" alt="neuro" />
            <div className="text-center">
              <Link to="/" className="text-center text-success">
                Depression<br/>Anxiety
              </Link>
            </div>
            </div>

            <div className="col-2 ">
            <img src={image5} className="card-img-top rounded-circle" alt="neuro" />
            <div className="text-center">
              <Link to="/" className="text-center text-success">
               Heart Issues
              </Link>
            </div>
            </div>
          
            <div className="col-2 ">
            <img src={image6} className="card-img-top rounded-circle" alt="neuro" />
            <div className="text-center">
              <Link to="/" className="text-center text-success">
                Blood Diseases
              </Link>
            </div>
            </div>

          
        </div>
      </div>
    );
  }
}
