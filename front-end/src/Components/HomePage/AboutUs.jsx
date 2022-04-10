import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./about.css";

export default class AboutUs extends Component {
  render() {
    return (<>
  <div className='' id="about">
    <div className='container'>

        <h1 className='mt-5 font-weight-bold text-light'>About Us</h1>

        <p className='text-light'> &nbsp;&nbsp; HealthGenic is an web based application allows users to search nearby docters,Hospitals,diagnostic labs,Book appointment with docters and also they can purchase & order medicines on one click.
            It is a platform where users have a one stop Solution for their all health needs.</p>
        <p className='text-light'>Our Application provides following functionalities to user:-</p>
        <p className='text-light'>1. Book Appointment with docters</p>
        <p className='text-light'> &nbsp;&nbsp; - One on One video consultations with docters</p>
        <p className='text-light'> &nbsp;&nbsp; - Medical Advices through chats</p>
        <p className='text-light'>2. Buy medicines </p>
        <p className='text-light'>&nbsp;&nbsp; -Buy Health products</p>
        <p className='text-light'>3. Connect with diagnostic labs</p>
        <p className='text-light'>4. Maintaining patient health data for docter convenience.</p>

        <h1 className='mt-5 font-weight-bold text-center text-success'><u>Meet Our Team Behind HealthGenic</u></h1>
        

        <div className="container justify-content-center mt-5 bg-dark ">
          <div className="row">

            <div className="col-6 my-2 col-lg-4 bg-dark">
              <div className="card text-center">
             
                <div className="card-body  text-dark">
                  <h4 className="card-title">Mahesh Divate</h4>
                  <p className="card-text text-secondary">
                    PROJECT LEADER
                  </p>                  
                </div>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-4 bg-dark">
              <div className="card text-center">
                <div className="card-body text-dark">
                  <h4 className="card-title">Ajay Shinde</h4>
                  <p className="card-text text-secondary">
                    Architect
                  </p>
                </div>
              </div>
            </div>

             <div className="col-6 my-2 col-lg-4 bg-dark"> 
              <div className="card text-center">
                <div className="card-body text-dark">
                  <h4 className="card-title">Akshay Agrawal</h4>
                  <p className="card-text text-secondary">
                     Backend developer
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* 2nd Card Body */}

        <div className="container justify-content-center mt-5 bg-dark">
          <div className="row">

            <div className="col-6 my-2 col-lg-4">
              <div className="card text-center">
                <div className="card-body  text-dark">
                  <h4 className="card-title">Lekha Gaikwad</h4>
                  <p className="card-text text-secondary">
                    UX designer/Graphic designer
                  </p>
                 
                </div>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-4 bg-dark">
              <div className="card text-center">
                <div className="card-body text-dark">
                  <h4 className="card-title">Mahima Chaudhary</h4>
                  <p className="card-text text-secondary">
                    E-Pharma Analyst
                  </p>
                 
                </div>
              </div>
            </div>

             <div className="col-6 my-2 col-lg-4 bg-dark"> 
              <div className="card text-center">
                <div className="card-body text-dark">
                  <h4 className="card-title">Kanishka Sharma</h4>
                  <p className="card-text text-secondary">
                      System Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
    </div>
    </>
      
    )
  }
}
