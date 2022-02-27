import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid bg-light" id="nav-container">
        <nav className="container nav-element-container d-flex justify-content-between align-items-center" >
          <h5 className="text-success">
            <i class="fas fa-heartbeat me-1"></i>
            HealthGenic
          </h5>
          <ul className="nav-list-container d-flex align-items-center">
            <li className="nav-element ms-3">
              <Link className="navbar-link px-3 py-2 rounded" to="/">
                Home
              </Link>
            </li>

            <li className="nav-element ms-3">
              <Link
               className="navbar-link px-3 py-2 rounded"
                aria-current="page"
                to="/consult"
              >
                Video Consultation
              </Link>
            </li>

            <li className="navbar-link px-3 py-2 rounded">
              <Link className="navbar-link" to="/Epharma">
                E-HealthPharma
              </Link>
            </li>

            <li className="navbar-link px-3 py-2 rounded">
              <Link className="navbar-link" to="/Register">
                Sign Up
              </Link>
            </li>
            <li className="navbar-link px-3 py-2 rounded">
              <Link className="navbar-link" to="/login">
               Log in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
