import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './login.scss';
import axios  from 'axios';
export default class UserLogin extends Component {
  onSignInSubmit = (e) => {
    e.preventDefault()
    // this is a temporary TEST code
    let user ={};
      let userName= document.getElementById("form2").value;
      const emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const mobileNumberRe = /^[0-9]{10}$/;
      if(userName.match(emailRe)){
        user.email = userName;
      }else if(userName.match(mobileNumberRe)){
        user.mobileNumber = userName;
      }
      user.password = document.getElementById("password").value;
      console.log(user);
      axios.post('http://localhost:8080/login', user)
      .then(function (response) {
        let serverResponseData = response.data;
        console.log(JSON.stringify(serverResponseData));

        if(serverResponseData != ""){
          document.body.innerHTML = `<code>${JSON.stringify(serverResponseData)}</code>`;
        }else{
          document.body.innerHTML = `<code>Error :No user found. ${JSON.stringify(serverResponseData)}</code>`;
        } 
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {
    return (
      <div>
        <form method="GET" action="localhost:8080/user" >
          <h3>
            <b>Login to your account</b>
          </h3>

          <div className="form-outline mb-2">
            <label className="form-label" htmlFor="form2Example11">
              Username
            </label>
            <input
              type="email"
              id="form2"
              className="form-control"
              placeholder="Phone number or email address"
            />
          </div>

          <div className="form-outline mb-2">
            <label className="form-label" htmlFor="form2">
              Password
            </label>
            <input type="password" id="password" className="form-control" />
          </div>

          <div className="text-center pt-1 mb-2 pb-1">
            <button className="btn btn-success btn-block fa-lg mb-3" type="button" onClick={this.onSignInSubmit}>
              Log in
            </button>
            <a className="text-muted" href="#!">
              Forgot password?
            </a>
          </div>

          <div className="d-flex align-items-center justify-content-center pb-2">
            <p className="mb-2 me-2">Don't have an account?</p>
            <button type="button" className="btn btn-outline-danger">
             <Link to="/DocRegister">Create new</Link> 
            </button>
          </div>
        </form>
      </div>
    );
  }
}
