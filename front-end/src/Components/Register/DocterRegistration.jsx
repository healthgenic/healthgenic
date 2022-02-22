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
    this.passwordHelpTextRef = React.createRef();
    this.mobileNumberHelpRef = React.createRef();
    this.otpFirstDigitRef = React.createRef();
    this.otpSecondDigitRef = React.createRef();
    this.otpThirdDigitRef = React.createRef();
    this.otpFourthDigitRef = React.createRef();
    this.otpFifthDigitRef = React.createRef();
    this.otpSixthDigitRef = React.createRef();
    this.state = {
      fullName: "",
      fullNameHelpText: "",
      password: "",
      mobileNumber: "",
      otpfirstDigit: "",
      otpSecondDigit: "",
      otpThirdDigit: "",
      otpFourthDigit: "",
      otpFifthDigit: "",
      otpSixthDigit: "",
      isBackspacePressed: false,
    };
  }
  isBackspacePressed = (e) => {
    console.log(e.nativeEvent.inputType);
    return new Promise((resolve, reject) => {
      if (e.nativeEvent.inputType === "deleteContentBackward") {
        this.setState({ isBackspacePressed: true });
        resolve(true);
      }
      resolve(false);
    });
  };
  storeDigit = async (e) => {
    const fieldId = e.target.id;
    console.log(e);
    switch (fieldId) {
      case "otp-enter-box-node1":
        await this.setState({ otpFirstDigit: e.target.value });
        this.isBackspacePressed(e).then((result) => {
          if (!result) {
            this.otpSecondDigitRef.current.focus();
          }
        });

        break;
      case "otp-enter-box-node2":
        await this.setState({ otpSecondDigit: e.target.value });
        this.isBackspacePressed(e).then((result) => {
          if (!result) {
            this.otpThirdDigitRef.current.focus();
          }
        });
        break;
      case "otp-enter-box-node3":
        await this.setState({ otpThirdDigit: e.target.value });
        this.isBackspacePressed(e).then((result) => {
          if (!result) {
            this.otpFourthDigitRef.current.focus();
          }
        });
        break;
      case "otp-enter-box-node4":
        await this.setState({ otpFourthDigit: e.target.value });
        this.isBackspacePressed(e).then((result) => {
          if (!result) {
            this.otpFifthDigitRef.current.focus();
          }
        });

        break;
      case "otp-enter-box-node5":
        await this.setState({ otpFifthDigit: e.target.value });
        this.isBackspacePressed(e).then((result) => {
          if (!result) {
            this.otpSixthDigitRef.current.focus();
          }
        });
        break;
      case "otp-enter-box-node6":
        await this.setState({ otpSixthDigit: e.target.value });
        break;
      default:
        console.log("unexpected");
    }
    const otp =
      this.state.otpFirstDigit +
      this.state.otpSecondDigit +
      this.state.otpThirdDigit +
      this.state.otpFourthDigit +
      this.state.otpFifthDigit +
      this.state.otpSixthDigit;
    // let otpTemp = this.state.otp + digit;
    // await this.setState({ otp: otpTemp });
    console.log(otp);
  };
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
  validatePassword = (e) => {
    const password = e.target.value;
    const node = this.passwordHelpTextRef.current;
    console.log(password);
    this.setState({ password: password });
    if (validate.isPassword(password)) {
      node.classList.remove("text-danger");
      node.classList.add("text-success");
    } else {
      node.classList.add("text-danger");
    }
    if (password == "") {
      node.classList.remove("text-danger");
      node.classList.remove("text-success");
    }
  };
  validateMobileNumber = (e) => {
    const mobileNumber = e.target.value;
    console.log(mobileNumber);
    if (validate.isMobileNumber(mobileNumber))
      this.setState({ mobileNumber: mobileNumber });
    else this.setState({ mobileNumber: this.state.mobileNumber });
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
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter Password"
                        area-describedby="passwordHelp"
                        value={this.state.password}
                        onChange={this.validatePassword}
                      />
                      <div
                        id="passwordHelp"
                        className="form-text mt-1"
                        ref={this.passwordHelpTextRef}
                      >
                        <ul>
                          <li> Password Should be 8-15 characters long</li>
                          <li>
                            Must contain one lowercase,one uppercase,one
                            numeric,one special character
                          </li>
                        </ul>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="mobile-number" className="form-label">
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          name="mobileNumber"
                          id="mobile-number"
                          className="form-control"
                          placeholder="Enter 10 digit mobile number"
                          area-describedby="mobileNumberHelp"
                          minLength="0"
                          maxLength="10"
                          value={this.state.mobileNumber}
                          onChange={this.validateMobileNumber}
                        />
                        <div
                          id="mobileNumberHelp"
                          className="form-text"
                          ref={this.mobileNumberHelpRef}
                        ></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary">Get OTP</button>
                    </div>
                    <div className="mb-3">
                      <div className="otp-container d-flex">
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node1"
                          className="form-control mx-1"
                          maxLength="1"
                          ref={this.otpFirstDigitRef}
                          value={this.state.otpFirstDigit}
                          onChange={this.storeDigit}
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node2"
                          className="form-control mx-1"
                          maxLength="1"
                          ref={this.otpSecondDigitRef}
                          value={this.state.otpSecondDigit}
                          onChange={this.storeDigit}
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node3"
                          ref={this.otpThirdDigitRef}
                          value={this.state.otpThirdDigit}
                          className="form-control mx-1"
                          maxLength="1"
                          onChange={this.storeDigit}
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node4"
                          className="form-control mx-1"
                          maxLength="1"
                          ref={this.otpFourthDigitRef}
                          value={this.state.otpFourthDigit}
                          onChange={this.storeDigit}
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node5"
                          className="form-control mx-1"
                          maxLength="1"
                          ref={this.otpFifthDigitRef}
                          value={this.state.otpFifthDigit}
                          onChange={this.storeDigit}
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node6"
                          className="form-control mx-1"
                          maxLength="1"
                          ref={this.otpSixthDigitRef}
                          value={this.state.otpSixthDigit}
                          onChange={this.storeDigit}
                        />
                      </div>
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
