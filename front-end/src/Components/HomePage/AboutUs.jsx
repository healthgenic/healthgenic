import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";
import image1 from "./Mahesh.jpeg";
import image2 from "./Ajay.jpeg";
import image3 from "./Akshay.jpeg";
import image4 from "./Lekha.jpeg";
import image5 from "./Mahima.jpeg";
import image6 from "./Kanishka.jpeg";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="" id="about">
          <div className="container">
            <h1 className="about-head font-weight-bold text-dark text-center">
              About Us
            </h1>

            <h6 className="text-dark opacity-75 text-center">
              HealthGenic is an web based application allows users to search
              nearby docters,Hospitals,diagnostic labs,Book appointment with
              docters and also they can purchase & order medicines on one click.
              It is a platform where users have a one stop Solution for their
              all health needs.
            </h6>
            <h5 className="text-dark">
              Our Application provides following functionalities to user:
            </h5>
            <h6 className="text-dark">* Book Appointment with docters</h6>
            <h6 className="text-dark">
              {" "}
              &nbsp;&nbsp; - One on One video consultations with docters
            </h6>
            <h6 className="text-dark">
              {" "}
              &nbsp;&nbsp; - Medical Advices through chats
            </h6>
            <h6 className="text-dark">* Buy medicines </h6>
            <h6 className="text-dark">&nbsp;&nbsp; - Buy Health products</h6>
            <h6 className="text-dark">* Connect with diagnostic labs</h6>
            <h6 className="text-dark">
               * Maintaining patient health data for docter convenience.
            </h6>

            <h1 className="mt-5 font-weight-bold text-center text-success">
              <u>Meet Our Team Behind HealthGenic</u>
            </h1>

            <div className="container justify-content-center mt-5 ">
              <div className="row">
                <div className="col-6 my-2 col-lg-4 ">
                  <div className="card text-center">
                    <div className="card-body  text-dark">
                      <h4 className="card-title">
                        <img
                          src={image1}
                          className="card-img-pro"
                          alt="lekhaImg"
                        />
                        <br />
                        Mahesh Divate
                      </h4>
                      <p className="card-text text-secondary">PROJECT LEADER</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 my-2 col-lg-4 ">
                  <div className="card text-center">
                    <div className="card-body text-dark">
                      <h4 className="card-title">
                        <img
                          src={image2}
                          className="card-img-pro"
                          alt="lekhaImg"
                        />
                        <br />
                        Ajay Shinde
                      </h4>
                      <p className="card-text text-secondary">Architect</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 my-2 col-lg-4 ">
                  <div className="card text-center">
                    <div className="card-body text-dark">
                      <h4 className="card-title">
                        <img
                          src={image3}
                          className="card-img-pro"
                          alt="lekhaImg"
                        />
                        <br />
                        Akshay Agrawal
                      </h4>
                      <p className="card-text text-secondary">
                        Backend Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd Card Body */}

            <div className="container justify-content-center mt-2 ">
              <div className="row">
                <div className="col-6 my-2 col-lg-4">
                  <div className="card text-center">
                    <div className="card-body  text-dark">
                      <h4 className="card-title">
                        <img
                          src={image4}
                          className="card-img-pro"
                          alt="lekhaImg"
                        />
                        <br />
                        Lekha Gaikwad
                      </h4>
                      <p className="card-text text-secondary">
                        UX Designer/Graphic Designer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-6 my-2 col-lg-4 ">
                  <div className="card text-center">
                    <div className="card-body text-dark">
                      <h4 className="card-title">
                        <img
                          src={image5}
                          className="card-img-pro"
                          alt="lekhaImg"
                        />
                        <br />
                        Mahima Chaudhary
                      </h4>
                      <p className="card-text text-secondary">
                        E-Pharma Analyst
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-6 my-2 col-lg-4 ">
                  <div className="card text-center">
                    <div className="card-body text-dark">
                      <h4 className="card-title">
                        <img
                          src={image6}
                          className="card-img-pro"
                          alt="lekhaImg"
                        />
                        <br />
                        Kanishka Sharma
                      </h4>
                      <p className="card-text text-secondary">
                        System Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row mt-3 text-center">
                <h1>
                  Our approach to healthcare </h1>
                  <h5 className="text-dark opacity-75">
                    Each time a patient finds the right doctor, we build a
                    healthier nation
                  </h5>
               
                <div className="col-md-4">
                  <img className="h-100" src="https://www.practo.com/providers/static/images/pages/company/about/connect.svg" />
                  <h4>Connect</h4>
                </div>
                <div className="col-md-4">
                  <img className="h-100" src="https://www.practo.com/providers/static/images/pages/company/about/trust.svg" />
                  <h4>Trust</h4>
                </div>
                <div className="col-md-4">
                  <img className="h-100" src="https://www.practo.com/providers/static/images/pages/company/about/transparency.svg" />
                  <h4>Transparency</h4>
                </div>
          </div>
          <br/>
          <div className="row  mt-5">
            <div className="vision col-md-6 text-center"><h2>Our Vision</h2><hr/>
              <div className="">
              <h6>Our vision is to revolutionizing healthcare by enabling consumers to find the best doctors, book instant appointments, consultations, and make better, more informed health decisions.
              </h6></div>
            </div>
            <div className="mission col-md-6 text-center"><h2>Our Mission</h2><hr/>
            <div className=""><h6>HealthGenic is on a mission to make quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.
            </h6></div>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </>
      
    );
  }
}
