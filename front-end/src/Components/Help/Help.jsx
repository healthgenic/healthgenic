import React, { Component } from "react";
import image from "./help2.webp";


export default class Help extends Component {
  render() {
    return (
      <div className="container help-HG">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="image">
                <img src={image} alt="trust" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="head">
                <h2 className="text-drak text-center">
                  Connect With Us....
                </h2>
                <p>
                  HealthGenic connects the entire health ecosystem together –
                  patients, doctors, pharmacy, diagnostics, clinics, hospitals
                  and other partners, to generate exceptional value and service
                  for all, esp. the end consumers. We integrate different parts
                  of the healthcare journey and put them together end-to-end on
                  our platform, so that patients can have one seamless
                  experience, irrespective of their need.
                </p>
                <h5 className="profile-rating mt-3 mb-5 text-success">
                  Ranking : <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star" ></i>
                  <i class="fa fa-star-half" ></i>
                </h5>
              </div>
            </div>

            <div className="cd-md-4 pl-10 detail">
              <div className="tab-content" id="tabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                >
                 
                  <div className="row ">
                    <div className="col-md-6">
                      <label>
                        <i className="fas fa-envelope mr-0"></i> Mail Id :
                      </label>
                    </div>
                    <div className="col-md-6">
                      <p>healthgenic@protonmail.com</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6">
                      <label>
                        <i className="fas fa-phone mr-0"></i> HelpLine Number :
                      </label>
                    </div>
                    <div className="col-md-6">
                      <p>+ 01 234 567 88</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6">
                      <label>
                        <i className="fas fa-print mr-0"></i> HelpLine Number :
                      </label>
                    </div>
                    <div className="col-md-6">
                      <p>+ 01 234 567 89</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-3 ">
            <label for="query" class="form-label">
                
              <h2><i className="fa fa-file-text-o" aria-hidden="true"> Frequently asked Questions</i></h2>
              <hr/>

              <h5><i className="fa fa-hand-o-right" > What does HealthGenic do? </i></h5>    
              <p>
              Our vision is to simplify healthcare by making quality healthcare more accessible, affordable and convenient
              </p>


              <h5><i className="fa fa-hand-o-right" > What are the products offered by HealthGenic for doctors?</i></h5>    
              <p>
                - HealthGenic Profile – Build your digital presence and create a free HealthGenic profile <br/>
                - Consult – Consult patients online, or offer follow-ups to your clinic patients <br/>
                - Health Feed – Publish health tips to educate and inspire millions of people to lead a healthier lifestyle<br/>
              </p>

              <h5><i className="fa fa-hand-o-right" > Does HealthGenic have a verification process for doctors who sign up on the platform? </i></h5>    
              <p>
              Yes. All the doctors on the HealthGenic platform are 100% genuine and their degrees have been verified. More about the verification process:<br/>
              Doctors are asked to provide the following documents as a first step.<br/>
              - Government issued photo ID (Passport/Aadhaar/PAN Card)<br/>
              - Their MCI registration number<br/>
              - Copies of their medical degrees if these are not already updated in their MCI registration<br/>
              - In cases where online MCI directory does not exist, they will need to submit a copy of their license<br/>
              Once the above mentioned documents are submitted, <br/>
              1. Our team verifies the information against the medical council database<br/>
2. The degrees will be matched against the HealthGenic Bluebook – a set of guidelines that define what specialisations can be claimed by a doctor basis the set of degrees he or she has; this  rule book is created in consultation with senior doctors, regulatory bodies as well as national associations of various specialties – making it one of the most comprehensive degree-specialisation mapping in India. <br/>
3. For every degree a doctor submits, the bluebook will highlight a specialisation that degree qualifies him/her for, and that is shown on their HealthGenic profile as well as ensures that they are shown in the relevant search results for that specialty.<br/>
4. For degrees that are not part of the bluebook, they are shown on their profile but their specialisation shown will not take them into account and their profile will not show up in search results for any specialty where their degree is not matched with that specialization in the Bluebook.<br/>
              </p>

            </label>
            </div>

          <div class="mb-3">
            <label for="query" class="form-label">
              <h5>**Write your Query here</h5>
            </label>
            <input type="text" class="form-control" id="query" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
