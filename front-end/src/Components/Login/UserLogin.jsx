import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './login.scss';

export default class UserLogin extends Component {
  render() { 
    return <div>

      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form method="post" action="loginVerification.jsp">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="username" id="username" name="uid" required/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="pass" required/>

        <button>Log In</button>
        <Link className='doc_reg' to="/Register">Docter Registration</Link>
    </form>

    </div>;
    
  }
}


