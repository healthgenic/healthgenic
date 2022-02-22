import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return <div>

<div className=" my-5 bg-light pt-2 pb-2 mb-0 border position-static fixed-bottom">
  <footer className="text-left text-lg-start text-dark mb-0 border"  >

    <section className="mt-2">
      <div className="container text-left text-md-start mt-5">
  
        <div className="row mt-3">
   
          <div className="col-md-3 col-lg-4 col-xl-2 mx-auto mb-0">
    
            <h5 className="text-uppercase fw-bold text-success">HealthGenic</h5>
            
            <p>
              A Complete platform for your all health needs.
            </p>
          </div>
    
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
            <h5 className="text-uppercase fw-bold text-success">Products</h5>
            
            <p>
              <Link to="/consult" className="text-dark">Online Consulation</Link>
            </p>
            <p>
              <Link to="/Epharma" className="text-dark">Medicines</Link>
            </p>
            <p>
              <Link to="/Epharma" className="text-dark">Health Products</Link>
            </p>
            <p>
              <Link to="" className="text-dark">Lab Tests</Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-0 ">
     
            <h5 className="text-uppercase fw-bold text-success">Useful links</h5>
           
            <p>
              <Link to="#!" className="text-dark">Register your Complaint</Link>
            </p>
            <p>
              <Link to="#!" className="text-dark">HealthBlogs</Link>
            </p>
            <p>
              <Link to="#!" className="text-dark">About Us</Link>
            </p>
            <p>
              <Link to="#!" className="text-dark">Help</Link>
            </p>
          </div>
    
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
            <h5 className="text-uppercase fw-bold text-success">Contact Us</h5>
          
            <p><i className="fas fa-home mr-0"></i> Ecity, Banglore</p>
            <p><i className="fas fa-envelope mr-0"></i> healthgenic@protonmail.com</p>
            <p><i className="fas fa-phone mr-0"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-0"></i> + 01 234 567 89</p>
          </div>
   
        </div>
     
      </div>
    </section>
   
    <div className="text-center p-3">
      © 2022 Copyright: 
      <Link to="/" className='text-dark'> HealthGenic</Link>
    </div>

  </footer>

</div>


    </div>;
  }
}
