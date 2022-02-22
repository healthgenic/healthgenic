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
     <>
     </>
    );
  }
}

export default DocterRegistration;
