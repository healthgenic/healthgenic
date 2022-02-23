import react, { Fragment } from 'react';
import 'firebase/auth';
import firebase from './firebase';
import swal from 'sweetalert';
import image from "./ub2.jpg";

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
    const code = this.state.OTP
    console.log("code")

    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      swal("Congratulations!! You Have Registered Successfully");
      //alert("User registration successfully")
     // alert("User registration successfully")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });

  }
  render() {
    return (
      <Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
              <h1 className='my-3 mt-5'>User Registration</h1> 
          
          <Form onSubmit={this.onSignInSubmit}>
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
            <Button color="warning">Generate OTP</Button>
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
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
          </Fragment>
    );
  }
}

export default UserRegistration;
