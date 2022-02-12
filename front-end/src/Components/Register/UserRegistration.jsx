import react, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

import axios from "axios";
import base_url from "../../api/service";

const AddUser = () => {

    /*  useEffect(() => {
         document.title="Registration-Page";
     },[]) */

    //function to call server
    const [user, setUser] = useState({});
    //form handler function
    const handleForm = (e) => {
        console.log(user);

        e.preventDefault();
    };

    //creating function to post data on server

    const postDatatoServer = (data) => {

        axios.post(`${base_url}/add`, data).then(
            (response) => {
                console.log(response);
                console.log("Success");

            }, (error) => {
                console.log(error);
                console.log("Success");

            }


        )

    }


    return (
        <div >

            <Fragment >

                <h1 className="text-center my-4" > ** ** ** ** * Enter Your Details ** ** ** ** * </h1>

                    <Form onSubmit={handleForm} >

                        <FormGroup >

                            <label> < b > Full Name </b></label >

                            <Input type="text"
                                placeholder="Enter Your Name"
                                name="userName"
                                onChange={
                                    (e) => {
                                        setUser({ ...user, fullname: e.target.value });
                                    }
                                }


                            />


                        </FormGroup>


                        <FormGroup >

                            <label> < b > Email </b></label >

                            <Input type="email"
                                placeholder="Enter Your Email-ID"
                                id="userEmail"

                                onChange={
                                    (e) => {
                                        setUser({ ...user, email: e.target.value });
                                    }
                                }


                            />


                        </FormGroup>


                        <FormGroup >

                            <label> < b > Mobile No. </b></label >

                            <Input type="number"
                                placeholder="Enter Your Mobile Number"
                                id="userMobile"

                                onChange={
                                    (e) => {
                                        setUser({ ...user, mobileNo: e.target.value });
                                    }
                                }

                            />


                        </FormGroup>
                        <FormGroup >

                            <label > < b > OTP </b></label >

                            <Input type="number"
                                placeholder="Enter The OTP"
                                id="otp"

                                onChange={
                                    (e) => {
                                        setUser({ ...user, otp: e.target.value });
                                    }
                                }


                            />


                        </FormGroup>

                        <FormGroup >

                            <label > < b > Password </b></label >

                            <Input type="password"
                                placeholder="Enter The password"
                                id="pass"

                                onChange={
                                    (e) => {
                                        setUser({ ...user, password: e.target.value });
                                    }
                                }


                            />


                        </FormGroup>




                        <Container className="text-center" >

                            <Button type="submit" color="warning" > Register </Button>
                        </Container>
                    </Form>


            </Fragment>
        </div>
    );

}

export default AddUser;