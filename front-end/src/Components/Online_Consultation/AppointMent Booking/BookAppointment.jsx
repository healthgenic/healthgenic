//Online Booking flow
//Welcome page --> BookAppoint (name,dieases,mob no)--> Payment Checkout page --> Payment --> Online Consultation

import PropTypes from 'prop-types'
import React, { Component } from 'react';
import firebase from '../../../firebase';
import 'firebase/auth';
import { signInWithPhoneNumber } from "firebase/auth";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

class BookAppointment extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      number :"",
      OTP:""
    }
    
    this.changeNumberHandler=this.changeNumberHandler.bind(this);
    this.changeOTPHandler=this.changeOTPHandler.bind(this);
  }

  

  changeNumberHandler =(event)=>{
    this.setState({number:event.target.value})
  }

  changeOTPHandler =(event)=> {
    this.setState({OTP:event.target.value})
  }


//Step 1. Set up the reCAPTCHA verifier

VerifyRecaptcha=()=>{
  console.log("Hello");
const auth = getAuth();
console.log("Hii")
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth)          //Here recaptcha-container is id
}

//Step2. Send Verification code to user

onSignInSubmit=(e)=>{
  e.preventDefault()
    this.VerifyRecaptcha();
    const phoneNumber = "+91" + this.state.number;
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


//step3. Sign in the user with the verification code
onSubmitOTP = (e) => {
  e.preventDefault()
  const code = this.state.OTP
  console.log("code") 

  window.confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log(JSON.stringify(user))
<<<<<<< HEAD
    swal("Congratulations!! You Have Registered Successfully");
    // let navigate = useNavigate();
    // navigate('/Checkout');
=======
    //swal("Congratulations!! You Have Registered Successfully");
    // let navigate = useNavigate();
    // navigate('/Checkout');
    window.location.href("http://localhost:3000/home/checkout");
>>>>>>> f2bdc75388a203887b9f3f618682cb2567629e9a

  }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
  });
}



  render() {
    return (
      <div className='container p-3 col-4 border mt-3'>
        <form>
          <h2 className='text-center mb-3'>Book your Appointment</h2>

          <div className='form-group mt-3'>
            <label>Enter your name</label>
            <input type='text' className='form-control'></input>
          </div>

          <div className='form-group'>
            <label>Tell us you health issues</label>
            <input type='text' className='form-control'></input>
          </div>

          <div className='form-group'>
            <label>Mobile Number</label>
            <input type='number' className='form-control' required name='number' value={this.state.number} onChange={this.changeNumberHandler}></input>
          </div>
          <button className='btn btn-success mt-3' onClick={this.onSignInSubmit}>Get Otp</button>

          <div id='recaptcha-container'></div>

          <div className='form-group mt-3'>
            <label>OTP</label>
            <input type='number' className='form-control' onChange={this.changeOTPHandler}></input>
          </div>

          <div className='form-group mt-3'>
            <button className='btn btn-success' onClick={this.onSubmitOTP}>Continue</button>
          </div>


        </form>
      </div>
    )
  }
}

export default BookAppointment;