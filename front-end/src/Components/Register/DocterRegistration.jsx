// import './register.css';
import react from 'react';
import 'firebase/auth';
import firebase from './firebase';

import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";

class DocterRegistration extends react.Component {
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  configureCaptch = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("recaptch varify ")
      
      },
  
    }, auth);
  }
  onSignInSubmit = (e) => {
    // import { getAuth, signInWithPhoneNumber } from "firebase/auth";
    e.preventDefault()
    this.configureCaptch()
    const phoneNumber = "+91" + this.state.mnumber
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been send");
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  }
  onSubmitOTP = (e) => {
    e.preventDefault()
    const code = this.state.OTP
    console.log("code")

    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("Doctor registration successfully")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });

  }
  render() {
    return (
      <body>
        <div className="background">
          <form onSubmit={this.onSignInSubmit}>
            <div id="sign-in-button"></div>
            <h3>Registration for doctor Here</h3>
            <label for="drname">Doctor name :</label><br />
            <input type="text" placeholder="Doctor name" id="drname" name="did" required /><br />
            <label for="moNumber">Mobile number :</label><br />
            <input typw="number" placeholder="Mobile number" id="moNumber" name="mnumber" required onChange={this.handleChange} /><br />
            <label for="emailid">Email id :</label><br />
            <input type="email" placeholder="Email id" id="emailid" name="mailid" required /><br />
            <label for="password">Password :</label><br />
            <input type="password" placeholder="password" id="password" name="password" required /><br />
            <button>Send OTP</button>
          </form>
          <form onSubmit={this.onSubmitOTP}>
            <input type="number" name="OTP" placeholder='OTP number' required onChange={this.handleChange} /><br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    );
  }
}

export default DocterRegistration;
