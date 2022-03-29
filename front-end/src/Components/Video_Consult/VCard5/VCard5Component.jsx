import React, { Component } from "react";

import { Link } from "react-router-dom";
// import "./Card1.css";

export default class VCard5Component extends Component {
  render() {
    return (
      <div>
        <div className="container  mt-5 ">
          <h2 className="mb-4">Benefits of Online Consultation<hr/></h2>
            
          
            <div className="row">
              <div className="col-4 text-center">
                <h5>Consult Top Doctors 24x7</h5>
                <p>
                  Connect instantly with a 24x7 specialist or choose to video
                  visit a particular doctor.
                </p>
              </div>
              <div className="col-4 text-center">
                <h5>Convenient and Easy</h5>
                <p>
                  Start an instant consultation within 2 minutes or do video
                  consultation at the scheduled time.
                </p>
              </div>
              <div className="col-4 text-center">
                <h5>100% Safe Consultations</h5>
                <p>
                  Be assured that your online consultation will be fully private
                  and secured.
                </p>
              </div>
              <div className="col-4 text-center">
                <h5>Similar Clinic Experience</h5>
                <p>
                  Experience clinic-like consultation through a video call with
                  the doctor. Video consultation is available only on the HealthGenic
                  app.
                </p>
              </div>
              <div className="col-4 text-center">
                <h5>Free Follow-up</h5>
                <p>
                  Get a valid digital prescription and a 7-day, free follow-up
                  for further clarifications.
                </p>
              </div>
            </div>
         
        </div>
      </div>
      
    );
  }
}
