import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./c2.png";
// import image1 from "./consult1.jpg";
import image2 from "./10.jpg";
import image3 from "./2.jpg";
// import image4 from "./dr4.jpg";
import { Link } from "react-router-dom";
// import "./VCard3.css";

class VCard3Component extends Component {
  render() {
    return (
      <div className=" bg-danger  p-2 text-dark bg-opacity-25">
        <div className="container ">
          
          <form method="">
            <div className="row">
              <div className="col-md-6">
                <div className="image">
                  <img src={image1} alt="img1" />
                </div>
              </div>

              <div className="col-6">
                <div className="head">
                  <h1 className="text-black ">Skip the travel!</h1>
                  <h2 className="text-black ">
                    Take Online Doctor Consultation
                  </h2>
                  <p>
                    Experience clinic-like consultation through a video call
                    with the doctor. Video consultation is available only on the
                    HealthGenic app.
                  </p>
                  <h6 className="profile-rating mt-2 mb-2 ">
                    <i class="fa fa-commenting-o"></i> Free
                    Followup{" "}
                  </h6>
                  <h6 className="profile-rating mt-2 mb-2 ">
                    <i class="fa fa-file-text-o"></i>  Digital
                    Description
                  </h6>
                  <h6 className="profile-rating mt-2 mb-2 ">
                  <i class="fa fa-check-circle-o" ></i> Verified Doctors
                  </h6>
                  <button type="button" class="btn btn-outline-primary mt-3 mb-4"><Link to="/Video_Consult/bookAppointment">Consult Now</Link></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default VCard3Component;
