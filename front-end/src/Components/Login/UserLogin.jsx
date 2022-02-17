import React, { Component } from "react";
import { Link } from "react-router-dom";
// import './login.scss';

export default class UserLogin extends Component {
  render() {
    return (
      <div>
        <form method="post" action="loginVerification.jsp">
          <h3>
            <b>Login to your account</b>
          </h3>

          <div class="form-outline mb-2">
            <label class="form-label" for="form2Example11">
              Username
            </label>
            <input
              type="email"
              id="form2"
              class="form-control"
              placeholder="Phone number or email address"
            />
          </div>

          <div class="form-outline mb-2">
            <label class="form-label" for="form2">
              Password
            </label>
            <input type="password" id="form2" class="form-control" />
          </div>

          <div class="text-center pt-1 mb-2 pb-1">
            <button class="btn btn-success btn-block fa-lg mb-3" type="button">
              Log in
            </button>
            <a class="text-muted" href="#!">
              Forgot password?
            </a>
          </div>

          <div class="d-flex align-items-center justify-content-center pb-2">
            <p class="mb-2 me-2">Don't have an account?</p>
            <button type="button" class="btn btn-outline-danger">
              <Link to="/DocRegister">Create new</Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
