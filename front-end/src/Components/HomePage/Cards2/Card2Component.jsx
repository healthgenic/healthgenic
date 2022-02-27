import React from "react";
import { Link } from "react-router-dom";
import image1 from "./12.png";
import image2 from "./13.jpg";
import image3 from "./bb.jpg";
import image4 from "./11.jpg";


function Card2Compnent() {

  return (
    <div>

      <div className="container mt-5">
        <h3 className="mb-5">Shop by Category</h3>
        <div class="card-deck row">
          <div className="col-6 my-2 col-lg-3">
            <img src={image1} className="card-img-top rounded-3" alt="..." />
            <div className="card-body text-center">
            <Link to="/covidEssential" className="btn btn-outline-success" >Covid Essentials</Link>
            </div>
          </div>

          <div className="col-6 my-2 col-lg-3">
            <img src={image2} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <Link to="/Ayurveda" className="btn btn-outline-success">Ayurveda</Link>
            </div>
          </div>

          <div className="col-6 my-2 col-lg-3">
            <img src={image3} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <Link to="/Medicines" className="btn btn-outline-success" >Medicines</Link>
            </div>
          </div>

          <div className="col-6 my-2 col-lg-3">
            <img src={image4} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <Link to="/MedicalDevice" className="btn btn-outline-success" >MedicalDevice</Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
export default Card2Compnent;
