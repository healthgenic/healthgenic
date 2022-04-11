import React, { Fragment, useState, useRef } from "react"
import axios from 'axios';
import swal from "sweetalert";
import "./Styles/Card.css"
import { Container, FormGroup, Button, Row, Col ,Form,Input} from "reactstrap";
const BookNow = (props) => {
  const form = useRef();
  
  const [userName, setUserName] = useState({});
  const [mnumber, setMnumber] = useState({});
  const [mailid, setMailid] = useState({});
  const [bgroup, setBgroup] = useState({});
  const [age, setAge] = useState({});
  const [gender, setGender] = useState({});
  const [day, setDay] = useState({});
  const [date, setDate] = useState({});
  const [time, setTime] = useState({});
 
  const handleClick = (e) => {
    e.preventDefault()
    const data = { 'userName': userName.userName, 'mnumber': mnumber.mnumber, 'mailid': mailid.mailid, 'bgroup': bgroup.bgroup, 'age': age.age, 'gender': gender.gender, 'day': day.day, 'date': date.date, 'time': time.time, 'did': props.location.state?.id.did, 'name': props.location.state.name.name }
    console.log(data);
    
     postData(data);
    // swal("Congratulation !!", "Your Appointment is Done !!  be on time.", "success")
    //   // swal("Click on either the button or outside the modal.")
    // .then((value) => {
    //     // swal(`The returned value is: ${value}`);
        props.history.push("/Video_Consult/bookAppointment/pay");

      // })  ;
  };
  const postData = async (data) => {
    axios({
      method: 'post',
      url: `http://localhost:8080/getDetails`,
      data: data
    });
  }
  return (
    <div className="container container col-4 mt-3">
      <h1 className='my-3 text-center mb-3'>BOOK APPOINTMENT</h1>
    <Fragment>
      {/* <Row>
        <Col md={6}> */}
          <div className="container">
          
            <div className="row">
              <div>
                
                <Form className="border shadow-lg p-5 mb-5 bg-white rounded" onSubmit={handleClick}  >
                  <FormGroup>
                    <label><b>Full_Name</b></label><br />
                    <Input type="text" placeholder="Enter Your Name" id="username" name="userName" required

                      onChange={
                        (e) => {
                          setUserName({ ...userName, userName: e.target.value });
                        }} /><br />

                  </FormGroup>

                  <FormGroup clasName=" ">
                    <label><b>Mobile number</b></label><br />
                    <Input typw="number" placeholder="Enter Mobile number" id="moNumber" name="mnumber" required
                      onChange={
                        (e) => {
                          setMnumber({ ...mnumber, mnumber: e.target.value });
                        }} /><br />
                  </FormGroup>

                  <FormGroup>
                    <label><b>Email id</b> :</label><br />
                    <Input type="email" placeholder="Enter Email ID" id="emailid" name="mailid" required
                      onChange={
                        (e) => {
                          setMailid({ ...mailid, mailid: e.target.value });
                        }} /><br />
                  </FormGroup>
                  <FormGroup>
                    <label><b>Blood Group</b> :</label><br />
                    <Input type="text" placeholder="Enter Your Blood Group" id="bg" name="bgroup" required
                      onChange={
                        (e) => {
                          setBgroup({ ...bgroup, bgroup: e.target.value });
                        }} /><br />
                  </FormGroup>
                  <FormGroup>
                    <label><b>Age</b> :</label><br />
                    <Input type="text" placeholder="Enter Your Age" id="age" name="age" required onChange={
                      (e) => {
                        setAge({ ...age, age: e.target.value });
                      }} /><br />
                  </FormGroup>
                  <FormGroup>
                    <label name="gender"  ><b>Gender</b> :</label><br />
                    <select class="form-select" required onChange={
                      (e) => {
                        setGender({ ...gender, gender: e.target.value });
                      }} >
                      <option value="Select">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <label name="day"><b>Day</b> :</label><br />
                    <select class="form-select" required onChange={
                      (e) => {
                        setDay({ ...day, day: e.target.value });
                      }} >
                      <option value="Select">Select</option>
                      <option value="mon">Monday</option>
                      <option value="tue">Tuesday</option>
                      <option value="wed">Wednesday</option>
                      <option value="thus">Thursday</option>
                      <option value="fri">Friday</option>
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <label name="date" ><b>Date</b> :</label><br />
                    <Input type="date" onChange={
                      (e) => {
                        setDate({ ...date, date: e.target.value });
                      }} required /><br />
                  </FormGroup>
                  <FormGroup>
                    <label name="time"  ><b>Timing</b> :</label><br />
                    <select class="form-select" required onChange={
                      (e) => {
                        setTime({ ...time, time: e.target.value });
                      }}>
                      <option value="Select">Select</option>
                      <option value="2:00 pm - 4:00 pm">2:00 pm - 4:00 pm</option>
                      <option value="7:00 pm - 9:00 pm">7:00 pm - 9:00 pm</option>
                    </select>
                  </FormGroup>
                  <br />
                  <Container className='text-center'>
                    <Button  type="submit" color="info" className="btn-lg">Book Appointment</Button>
                  </Container>
                 
                </Form>

              </div>
            </div>
          </div>
        {/* </Col>
        <Col md={4}><div className="sideImg">
          <img src="data:image/png;base64,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" alt="img1" className="card-img-top" />
        </div>
        </Col>
      </Row> */}

    </Fragment>
    </div>)
   
}
export default BookNow;