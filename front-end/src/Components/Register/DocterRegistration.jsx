// import './register.css';
import React from "react";
import "firebase/auth";
import firebase from "./firebase";
import { validate } from "./validate";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";

class DocterRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.fullNameHelpRef = React.createRef();
    this.state = { fullName: "", fullNameHelpText: "" };
  }
  validateFullName = (e) => {
    const fullName = e.target.value;
    const node = this.fullNameHelpRef.current;

    this.setState({ fullNameHelpText: "Name should contain alphabets only" });
    if (validate.isFullName(fullName)) {
      this.setState({ fullName: fullName });
      node.classList.add("text-success");
      node.classList.remove("text-danger");
    } else {
      node.classList.remove("text-success");
      node.classList.add("text-danger");
      this.setState({ fullName: this.state.fullName });
    }
    if (fullName == "") {
      node.classList.add("text-success");
      node.classList.remove("text-success");
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  configureCaptch = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("recaptch varify ");
        },
      },
      auth
    );
  };
  onSignInSubmit = (e) => {
    // import { getAuth, signInWithPhoneNumber } from "firebase/auth";
    e.preventDefault();
    this.configureCaptch();
    const phoneNumber = "+91" + this.state.mnumber;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been send");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };
  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.OTP;
    console.log("code");

    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("Doctor registration successfully");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  render() {
    return (
      <>
        <div id="sign-in-button"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 form-container">
              <h1 className="heading-6 my-5">Sign Up</h1>
              <form>
                <div className="form-group">
                  <div className="mb-3">
                    <label htmlFor="full-name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      class="form-control"
                      id="full-name"
                      placeholder="Enter Full Name"
                      required
                      aria-describedby="fullNameHelp"
                      value={this.state.fullName}
                      onChange={this.validateFullName}
                    />
                    <div
                      id="fullNameHelp"
                      className="form-text"
                      ref={this.fullNameHelpRef}
                    >
                      {this.state.fullNameHelpText}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </>
    );
  }
}

export default DocterRegistration;
