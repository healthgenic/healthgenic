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
import { useHistory } from "react-router-dom";
import axios from 'axios';


class BookAppointment extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      number :"",
      OTP:"",
      name:"",
      address:"",
      pin:"",
      hIssue:"",

    }
    
    this.changeNumberHandler=this.changeNumberHandler.bind(this);
    this.changeOTPHandler=this.changeOTPHandler.bind(this);
    this.changeNameHandler=this.changeNameHandler.bind(this);
    this.changeAddressHandler=this.changeAddressHandler.bind(this);
    this.changePinHandler=this.changePinHandler.bind(this);
    this.changeHIssueHandler=this.changeHIssueHandler.bind(this);

  }

  changeNameHandler=(event)=>{
    this.setState({name:event.target.value})
  }

  changeAddressHandler=(event)=>{
    this.setState({address:event.target.value})
  }


  changePinHandler=(event)=>{
    this.setState({pin:event.target.value})
  }

  changeHIssueHandler=(event)=>{
    this.setState({hIssue:event.target.value})
  }
  

  changeNumberHandler =(event)=>{
    this.setState({number:event.target.value})
  }

  changeOTPHandler =(event)=> {
    this.setState({OTP:event.target.value})
  }



saveOrder=()=>{

  let Appointment={name:this.state.name,address:this.state.address,pin:this.state.pin,mob:this.state.number,hIssue:this.state.hIssue}

  axios.post("http://localhost:8080/BookAppointment",Appointment);
  console.log(Appointment);
  console.log("Data posted on server");
  
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
onSubmitOTP = () => {
  //e.preventDefault()
  const code = this.state.OTP
  console.log("code") 



  window.confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    //nconsole.log(JSON.stringify(user))
    //swal("Congratulations!! You Have Registered Successfully");
    // let navigate = useNavigate();
    // navigate('/Checkout');
    
    //window.location.href("http://localhost:3000/home/checkout");

  }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
  });
}

pushfunc= (e) => { 
  console.log("hello")
  this.props.history.push('/bookAppointment/pay');
} 

wrapperFunction = (e) => {
  e.preventDefault();
  
  this.saveOrder();
  this.onSubmitOTP();
  this.pushfunc();
}



  render() {
    return (
      <div className='container p-3 col-4 border mt-3'>
        <form>
          <h2 className='text-center mb-3'>Book Your Appointment</h2>

          <div className='form-group mt-3'>
            <label>Enter your name</label>
            <input type='text' className='form-control' name='name' value={this.state.name} onChange={this.changeNameHandler}></input>
          </div>

          <div className='form-group mt-3'>
            <label>Address</label>
            <input type='text' className='form-control' name='address' value={this.state.address} onChange={this.changeAddressHandler}></input>
          </div>

          <div className='form-group mt-3'>
            <label>Pin Code</label>
            <input type='text' className='form-control' name='pin' value={this.state.pin} onChange={this.changePinHandler}></input>
          </div>

          <div className='form-group'>
            <label>Tell us you health issues</label>
            <input type='text' className='form-control' name='hIssue' value={this.state.hIssue} onChange={this.changeHIssueHandler}></input>
          </div>
          <br></br>


        {/* <div className='form-group'>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose Mode of Consultation</option>
              <option value='200'>Video Consultation - ₹200</option>
              <option value='100'>Audio Consultation - ₹100</option>
          </select>
        </div> */}

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
            <button className='btn btn-success' onClick={ this.wrapperFunction}>Book Appointment</button>
          </div>


        </form>
      </div>
    )
  }
}

export default BookAppointment;