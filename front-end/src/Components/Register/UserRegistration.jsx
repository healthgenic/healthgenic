import react, { Fragment } from 'react';
import 'firebase/auth';
import firebase from './firebase';
import swal from 'sweetalert';

import axios from 'axios';
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import {Container, Form, FormGroup, Input, Button} from "reactstrap";

class UserRegistration extends react.Component {
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
    const otp = this.state.OTP
    console.log(otp);
    // this is a temporary TEST code to establish connection between http request 
    // from react to spring boot
    
    
    window.confirmationResult.confirm(otp).then((result) => {
      let user ={};
      //to do - form data validation
      user.fullName = document.getElementById("username").value.toLowerCase();
      user.mobileNumber = document.getElementById("moNumber").value;
      user.email = document.getElementById("emailid").value;
      user.password = document.getElementById("password").value;
      console.log(user);
      axios.post('http://localhost:8080/user', user)
      .then(function (response) {
        let serverResponseData = response.data; 
        
        // server returns json data with 2 fields : 
        // "urlToDirect" describing which page to go depending on the result 
        // like error page or login page and 
        // "message" describing result of this request


        console.log(serverResponseData);
        if(response.status == 200 && serverResponseData.message=="success"){
          swal("Congratulations!! You Have Registered Successfully");
          document.body.innerHTML = "<h1 class='text-success'>user created, redirecting to log in page</h1>";
          setTimeout(()=>{
            window.location ="/home/login";
          },3000)
        }else{
          document.body.innerHTML = `<code>${JSON.stringify(serverResponseData)}</code>`;
        }
      })
      
      .catch(function (error) {
        console.log(error);
      });
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });

  }
  render() {
    return (
      <Fragment>

         <h1 className='text-center'>User Registration</h1> 
          
          <Form className='w-25 center'>
            <div id="sign-in-button"></div>
           
           <FormGroup>
            <label><b>Full Name </b></label><br />
            <Input type="text" placeholder="Enter Your Name" id="username" name="userID" required /><br />
            </FormGroup>

            <FormGroup>
            <label><b>Mobile number</b></label><br />
            <Input typw="number" placeholder="Enter Mobile number" id="moNumber" name="mnumber" required onChange={this.handleChange} /><br />
            </FormGroup>

            <FormGroup>
            <label><b>Email id</b> :</label><br />
            <Input type="email" placeholder="Enter Email ID" id="emailid" name="mailid" required /><br />
            </FormGroup>

            <FormGroup>
            <label><b>Password</b></label><br />
            <Input type="password" placeholder="Enter Your Password" id="password" name="password" required /><br />
            <Button color="warning" onClick={this.onSignInSubmit}>Generate OTP</Button>
            </FormGroup>

            <br/>
             </Form>

          <form onSubmit={this.onSubmitOTP} >

            <FormGroup>
            <label><b>OTP</b></label><br/>
            <Input type="number" name="OTP" placeholder='Enter The OTP' required onChange={this.handleChange} /><br />
            </FormGroup>
            <Container className='text-center'>
            <Button type="submit" color="warning">Register</Button>
            </Container>
            
          </form>
        
          </Fragment>
    );
  }
}

export default UserRegistration;
