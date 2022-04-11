import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../service/auth.service"
import { toast, ToastContainer } from 'react-toastify';
import swal from "sweetalert";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import userService from "../../service/user-service";

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [role, setRole] = useState(['ROLE_USER']);

    const [invalidPasswordText, setInvalidPasswordText] = useState(" ");
    const [invalidUsernameLengthText, setInvalidUsernameLengthText] = useState(" ");
    const [invalidEmailFormatText, setInvalidEmailFormatText] = useState(" ");
    const [inputFieldEmptyText, setInputFieldEmptyText] = useState(" ");
    // to inform user for invalid form input 
    const vpassword = (value) => {
        if (value.length < 6 || value.length > 40) {
            setInvalidPasswordText("The password must be between 6 and 40 characters.");

        } else {
            setInvalidPasswordText("");
        }
    };
    const vusername = (value) => {
        if (value.length < 3 || value.length > 20) {
            setInvalidUsernameLengthText("The username must be between 3 and 20 characters.");
        } else {
            setInvalidUsernameLengthText("");
        }
    };

    const validEmail = (value) => {
        if (!isEmail(value)) {
            setInvalidEmailFormatText("This is not a valid email.");
        } else {
            setInvalidEmailFormatText(" ")
        }
    };
    const required = (value) => {
        if (!value) {
            setInputFieldEmptyText("This field is required!");
        }
    };

    const onChangeName = (e) => {
        const name = e.target.value;
        vusername(name);
        setName(name);
    };
    const onChangeUsername = (e) => {
        const username = e.target.value;
        validEmail(username);
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        vpassword(password);
        setPassword(password);
    };
    const onRadioButtonChange = (e) => {
        let role = e.target.value;
        setRole([role]);
    }

    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(name, username, password, role).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                    //toast.success("Registration Successfull!!!")
                    //swal("Registration Successfull", "success")
                    AuthService.login(username, password).then(
                        (data) => {
                            if (equals(role, ['ROLE_USER'])) {
                                console.log(role)
                                userService.getUserProfile(username).then(
                                    (response) => {
                                        if(response.data === ""){
                                            props.history.push({
                                                pathname: "/userprofile"
                                            });
                                        }else{
                                            props.history.push({
                                                pathname: "/",
                                            });
                                            window.location.reload();
                                        }
                                    }
                                );
                            }
                            else if (equals(role, ['ROLE_DOCTOR'])) {
                                props.history.push({
                                    pathname: "/home/docdetails",
                                });
                                window.location.reload();
                            }
                        }
                    )
                    //
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                    //toast.error("Error");
                    //swal("Registration Unsuccessfull", "error")
                }
            );
        }
    };
    return (
        <div className="row my-5 mx-5 d-flex justify-content-center ">
            <div className="col-xl-4 col-md-4">
                {/* <ToastContainer/> */}

                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                defaultValue="ROLE_USER"
                                name="row-radio-buttons-group"
                                onClick={onRadioButtonChange}
                            >
                                <FormControlLabel value="ROLE_USER" control={<Radio />} label="I'm a User" />
                                <FormControlLabel value="ROLE_DOCTOR" control={<Radio />} label="I'm a Doctor" />
                            </RadioGroup>
                            <div className="form-group">
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="username">Username</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={name}
                                        required
                                        onChange={onChangeName}
                                    />
                                </div>

                                <small className="text-danger">{invalidUsernameLengthText}&nbsp;</small>
                            </div>
                            <div className="form-group">
                                <div className="mb-1">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        required
                                        value={username}
                                        onChange={onChangeUsername}
                                    />
                                    <small className="text-danger">{invalidEmailFormatText}&nbsp;</small>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="mb-1">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        required
                                        onChange={onChangePassword}
                                    />
                                    <small className="text-danger">{invalidPasswordText}&nbsp;</small>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success">Sign Up</button>
                            </div>
                        </div>
                    )}
                    {message && (
                        <div className="form-group">
                            <div
                                className={successful ? "alert alert-success mt-2" : "alert alert-danger mt-2"}
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};
export default Register;