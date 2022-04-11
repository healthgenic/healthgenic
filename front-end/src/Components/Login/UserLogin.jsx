import React, { Component, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthService from '../../service/auth.service'
import UserService from '../../service/user-service'
import './login.css';
import image from "./background.jpg";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default function UserLogin(props) {
  const form = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    let username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    let password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    //form.current.validateAll();
    
      AuthService.login(username, password).then(
        (response) => {
         //toast.success("Login Successfull");
         UserService.getUserProfile(username).then((response) => {
          
          console.log(response)
           if(response.data === ""){
            console.log(username);
            props.history.push({
              pathname: "/userprofile",
          });

            props.history.push("/userprofile");
            //window.location.reload();
          }else{
            props.history.push("/");
            window.location.reload();
          } 
         })
        },
        (error) => {
          //toast.error("Error")
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
  };

  return (
    <div>
      <img src={image}  className="card-img-top rounded-3" alt="..." />

      {/* <ToastContainer/> */}
      <form className="login" onSubmit={handleLogin} ref={form}>
        <h3>
          <b>Login to your account</b>
        </h3>

        <div className="form-outline mb-2">
          <label className="form-label">
            Email ID
          </label>
          <input
            type="email"
            id="form2"
            className="form-control"
            name="username"
            placeholder="Enter your email address"
            value={username}
            onChange={onChangeUsername}
          />
        </div>

        <div className="form-outline mb-2">
          <label className="form-label">
            Password
          </label>
          <input type="password" id="form23" className="form-control" name="password" value={password} onChange={onChangePassword} />
        </div>

        <div className="text-center pt-1 mb-2 pb-1">
          <button className="btn btn-success btn-block fa-lg mb-3" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </button>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          {/* <button class="btn btn-success btn-block fa-lg mb-3" type="button">
            Log in
          </button> */}
          <a className="text-muted" href="#!">
            Forgot password?
          </a>
        </div>

        <div className="d-flex align-items-center justify-content-center pb-2">
          <p className="mb-2 me-2">Don't have an account?</p>
          <button type="button" className="btn btn-outline-danger">
            <Link to="/Register">Create new</Link>
          </button>
        </div>
      </form>
    </div>
  );

}
