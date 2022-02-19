import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return <div>

<div className=" my-5 bg-dark pt-2 pb-2 mb-0 border position-static fixed-bottom">
  <footer className="text-center text-lg-start text-white mb-0 border"  >

    <section className="mt-2">
      <div className="container text-center text-md-start mt-5">
  
        <div className="row mt-3">
   
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-0">
    
            <h6 className="text-uppercase fw-bold text-success">HealthGenic</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              A Complete platform for your all health needs.
            </p>
          </div>
    
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
            <h6 className="text-uppercase fw-bold text-success">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                />
            <p>
              <Link to="/consult" className="text-white">Online Consulation</Link>
            </p>
            <p>
              <Link to="/Epharma" className="text-white">Medicines</Link>
            </p>
            <p>
              <Link to="/Epharma" className="text-white">Health Products</Link>
            </p>
            <p>
              <Link to="" className="text-white">Lab Tests</Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-0 ">
     
            <h6 className="text-uppercase fw-bold text-success">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <Link to="#!" className="text-white">Register your Complaint</Link>
            </p>
            <p>
              <Link to="#!" className="text-white">HealthBlogs</Link>
            </p>
            <p>
              <Link to="#!" className="text-white">About Us</Link>
            </p>
            <p>
              <Link to="#!" className="text-white">Help</Link>
            </p>
          </div>
    
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
            <h6 className="text-uppercase fw-bold text-success">Contact Us</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p><i className="fas fa-home mr-3"></i> Ecity, Banglore</p>
            <p><i className="fas fa-envelope mr-3"></i> healthgenic@protonmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
   
        </div>
     
      </div>
    </section>
   
    <div className="text-center p-3">
      © 2022 Copyright: 
      <Link to="/" className='text-white'> HealthGenic</Link>
    </div>

  </footer>

</div>


    </div>;
  }
}
