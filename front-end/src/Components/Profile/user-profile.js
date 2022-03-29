import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import AuthService from "../../service/auth.service";
import PersonalDetails from "./PersonalDetails";
import Menus from "./Menus";
import UserProfile from "../../service/user-service"
import { Route } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";
import MyAppointments from "./MyAppointments";
import MyTestLabs from "./MyTestLabs";
import MyEpharmaOrders from "./MyEpharmaOrders";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  /*useEffect(() => {
    document.title = 'Home'
    UserProfile.getUserProfile(currentUser.username).then(
      (response)=>{
          console.log(response);
    }, (error) => {console.log(error)})
}, []);*/

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser?.username}</strong> Profile
        </h3>
      </header>

      <div>
      <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Route path="/profile/personalDetails" component={PersonalDetails} exact/>
              <Route path="/profile/myappointments" component={MyAppointments} exact/>
              <Route path="/profile/mytestlabs" component={MyTestLabs} exact/>
              <Route path="/profile/mymedicineorders" component={MyEpharmaOrders} exact/>
              {/* <Route path="/" component={Home} exact />
              <Route path='/header' component={Header} exact /> */}
            </Col>
          </Row>
      </div>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
  );
};

export default Profile;