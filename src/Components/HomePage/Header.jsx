import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-success" to="/">HealthGenic</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/consult">Video Consultation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Epharma">HealthPharma</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
     
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
          <Link className="nav-link" to="/login">Login/Register</Link>
       </li>
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
            <Link className="nav-link" to="/Register">User Register</Link>
        </li>
      </ul>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
            <Link className="nav-link" to="/DocRegister">Register</Link>
        </li>
      </ul>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
            <Link className="nav-link" to="/Payment">Payment</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </div>;
  }
}
