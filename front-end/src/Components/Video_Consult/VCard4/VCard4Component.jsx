import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./v1.png";

import { Link } from "react-router-dom";
// import "./VCard3.css";

class VCard4Component extends Component {
  render() {
    return (
      <div className=" bg-success  p-3 text-dark bg-opacity-25">
           
        <div className="container ">
        
          <form >
            <div className="row">
              <div className="col-md-4">
                <div class="card text-center ">
                  <div class="card-header">Dr. Carol Jain</div>
                  <div class="card-body">
                  <h5 class="card-title">2 Years Experience</h5>
                    <p class="card-text">
                      2012 consults done
                    </p>
                    <p className="profile-rating mt-3 mb-3 text-success">
                  Rating : <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star-half" ></i>
                </p>
                  </div>
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card text-center">
                  <div class="card-header">Dr. Ayan Khan</div>
                  <div class="card-body">
                  <h5 class="card-title">4 Years Experience</h5>
                    <p class="card-text">
                      2022 consults done
                    </p>
                    <p className="profile-rating mt-3 mb-3 text-success">
                    Rating : <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star-half" ></i>
                </p>
                  </div>
                  <div class="card-footer text-muted">4 days ago</div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card text-center">
                  <div class="card-header">Dr. Maven Das</div>
                  <div class="card-body">
                    <h5 class="card-title">7 Years Experience</h5>
                    <p class="card-text">
                      3887 consults done
                    </p>
                    <p className="profile-rating mt-3 mb-3 text-success">
                    Rating : <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                </p>
                  </div>
                  <div class="card-footer text-muted">6 days ago</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default VCard4Component;
