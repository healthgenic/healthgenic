import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import AuthService from '../../../service/auth.service'

function Header() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      //setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      //setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    } else {
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  return (
    <div className="container-fluid bg-light" id="nav-container">
      <nav className="container nav-element-container d-flex justify-content-between align-items-center" >
        <h3 className="text-success">
          <i className="fas fa-heartbeat me-1"></i>
          HealthGenic
        </h3>
        <ul className="nav-list-container d-flex align-items-center">
          <li className="nav-element ms-3">
            <Link className="navbar-link px-3 py-2 rounded" to="/">
              Home
            </Link>
          </li>

          {!equals(currentUser?.roles, ['ROLE_DOCTOR']) ? (<li className="nav-element ms-3">
            <Link className="navbar-link px-3 py-2 rounded" to="/Video_Consult">
              Book Appointment
            </Link>
          </li>) : (<></>) }

          <li className="nav-element ms-3">
            <Link className="navbar-link px-3 py-2 rounded" to="/Epharma">
              E-Pharma
            </Link>
          </li>

          <li className="nav-element ms-3">
            <Link className="navbar-link px-3 py-2 rounded" to="/AboutUs">
              About Us
            </Link>
          </li>

          {equals(currentUser?.roles, ['ROLE_DOCTOR']) ? <li className="nav-element ms-3">
            <Link
              className="navbar-link px-3 py-2 rounded"
              aria-current="page"
              to="/consult"
            >
              Video Consultation
            </Link>
          </li> : <></>}


          {/* <li className="navbar-link px-3 py-2 rounded">
              <Link className="navbar-link" to="/Register">
                Sign Up
              </Link>
            </li>
            <li classNagit restore me="navbar-link px-3 py-2 rounded">
              <Link className="navbar-link" to="/login">
               Log in
              </Link> 
    </li>*/}


          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
              {!equals(currentUser?.roles, ['ROLE_DOCTOR']) ? <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>:<Link to={"/docdetails"} className="nav-link">
                  {currentUser.username}
                </Link>}
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ms-3">
             
                    <Link className="btn  btn-outline-success" to="/login">
                      Login/Register
                    </Link>
          
                </li>
              </ul>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;