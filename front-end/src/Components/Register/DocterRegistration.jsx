// import './register.css';
import React from "react";
import "firebase/auth";
import firebase from "./firebase";
import { validate } from "./validate";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import Alert from "./Alert";
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
    this.submitButtonRef = React.createRef();
    this.state = {
      fullName: "",
      fullNameHelpText: "Name should contain alphabets only",
      email: "",
      password: "",
      mobileNumber: "",
      otpFirstDigit: "",
      otpSecondDigit: "",
      otpThirdDigit: "",
      otpFourthDigit: "",
      otpFifthDigit: "",
      otpSixthDigit: "",
      isBackspacePressed: false,
      otp: "",
      title: "",
      message: "",
      action: "",
      classList: "",
    };
    this.alertDangerClassList = "alert alert-danger fade show";
    this.alertSuccessClassList = "alert alert-success fade show";
  }

  isBackspacePressed = (e) => {
    e.preventDefault();
    return new Promise((resolve, reject) => {
      if (e.nativeEvent.inputType === "deleteContentBackward") {
        this.setState({ isBackspacePressed: true });
        resolve(true);
      }
      resolve(false);
    });
  };
  storeDigit = async (e) => {
    e.preventDefault();
    const fieldId = e.target.id;
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
    if (otp.length == 6) {
      this.setState({ otp: otp });
      this.verifyOtp();
    }
  };
  resetAlert = () => {
    setTimeout(() => {
      this.setState({ title: "", message: "", action: "", classList: "" });
    }, 2300);
  };
  sendDoctorDetailsToServer = (e) => {
    e.preventDefault();
    const user = {};
    user.fullName = this.state.fullName;
    user.password = this.state.password;
    user.email = this.state.email;
    user.mobileNumber = this.state.mobileNumber;
    console.log(user);
  };
  validateFullName = (e) => {
    e.preventDefault();
    const fullName = e.target.value;
    const node = this.fullNameHelpRef.current;
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
    this.setState({ title: "foo" });
  };
  validateEmail = (e) => {
    e.preventDefault();
    const email = e.target.value;
    this.setState({ email: email });
  };
  validatePassword = (e) => {
    e.preventDefault();
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
    e.preventDefault();
    const mobileNumber = e.target.value;
    console.log(mobileNumber);
    if (validate.isMobileNumber(mobileNumber))
      this.setState({ mobileNumber: mobileNumber });
    else this.setState({ mobileNumber: this.state.mobileNumber });
  };

  configureCaptch = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.sendOtp();
          console.log("recaptch varify ");
        },
      },
      auth
    );
  };
  sendOtp = (e) => {
    // import { getAuth, signInWithPhoneNumber } from "firebase/auth";
    e.preventDefault();
    this.configureCaptch();
    const phoneNumber = "+91" + this.state.mobileNumber;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been send");
        //send alert
        this.setState({
          title: "Otp Sent",
          action: "success",
          message: "! Please check messsage inbox.",
          classList: this.alertSuccessClassList,
        });
        //reset alert
        this.resetAlert();
      })
      .catch((error) => {
        this.setState({
          title: "Otp send failed",
          action: "danger",
          message: "! Please click on Get otp again.",
          classList: this.alertDangerClassList,
        });
        this.resetAlert();
        console.log(error);
      });
  };
  verifyOtp = () => {
    const code = this.state.otp;
    console.log(code);

    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        this.setState({
          title: "Otp verified",
          action: "success",
          message: "",
          classList: this.alertSuccessClassList,
        });
        //reset alert
        this.resetAlert();
        const user = result.user;
        console.log(JSON.stringify(user));
        this.submitButtonRef.current.removeAttribute("disabled");
        // ...
      })
      .catch((error) => {
        this.setState({
          title: "Otp is incorrect",
          action: "danger",
          message: "! Please renter correct otp.",
          classList: this.alertDangerClassList,
        });
        //reset alert
        this.resetAlert();
        console.log(error.message);
      });
  };
  render() {
    return (
      <>
        <div id="sign-in-button"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 form-container">
              <div className="alert-container my-2" style={{ height: "58px" }}>
                <Alert
                  action={this.state.action}
                  title={this.state.title}
                  message={this.state.message}
                  classList={this.state.classList}
                />
              </div>
              <h1 className="heading-6 mb-3">Sign Up</h1>
              <form onSubmit={this.sendDoctorDetailsToServer}>
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
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="yourname@email.com"
                        required="required"
                        value={this.state.email}
                        onChange={this.validateEmail}
                      />
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
                        required
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
                          required
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
                      <button
                        className="btn btn-primary"
                        onClick={this.sendOtp}
                      >
                        Get OTP
                      </button>
                    </div>
                    <div className="mb-3">
                      <div className="otp-container d-flex">
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node1"
                          className="form-control mx-1 text-center"
                          maxLength="1"
                          ref={this.otpFirstDigitRef}
                          value={this.state.otpFirstDigit}
                          onChange={this.storeDigit}
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node2"
                          className="form-control mx-1 text-center"
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
                          className="form-control mx-1 text-center"
                          maxLength="1"
                          onChange={this.storeDigit}
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node4"
                          className="form-control mx-1 text-center"
                          maxLength="1"
                          ref={this.otpFourthDigitRef}
                          value={this.state.otpFourthDigit}
                          onChange={this.storeDigit}
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node5"
                          className="form-control mx-1 text-center"
                          maxLength="1"
                          ref={this.otpFifthDigitRef}
                          value={this.state.otpFifthDigit}
                          onChange={this.storeDigit}
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp-enter-box-node6"
                          className="form-control mx-1 text-center"
                          maxLength="1"
                          ref={this.otpSixthDigitRef}
                          value={this.state.otpSixthDigit}
                          onChange={this.storeDigit}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        type="submit"
                        value="Sign Up"
                        className="btn btn-block w-100 btn-primary "
                        disabled
                        ref={this.submitButtonRef}
                      />
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
