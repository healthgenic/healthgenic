import React, { Component } from 'react'
import axios from "axios";
export default class DocterDetails extends Component {

    constructor(props) {
        super(props)

        
        this.state = {
            patient :[]
        }
    }

    componentDidMount () {
        axios.get("http://localhost:8080/bookingdata").then((res)=>{
            this.setState({patient :res.data});
        });
    }
  render() {
    return (<div className='container'>

        <h2 className='text-center mt-4 mb-2'>Patient Management System</h2> 
          <table className="table table-striped table-bordered mt-2">
              <thead>
                    <th>Patient Name</th>
                    <th>Mobile Number</th>
                    <th>Mail ID</th>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Gender</th>
                    <th>Blood Group</th>
                    <th>Schedule Appointment</th>

              </thead>
              <tbody>
                      {
                          this.state.patient.map(
                              patient => 
                            <tr key={patient.userName}>
                                <td>{patient.userName}</td>
                                <td>{patient.mnumber}</td>
                                <td>{patient.mailid}</td>
                                <td>{patient.date}</td>
                                <td>{patient.day}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.bgroup}</td>
                                <td><button type="button" class="btn btn-success"><a href='http://localhost:3000/home/consult' className='text-light'>Schedule</a></button>
                                </td>
                            </tr>
                          )
                      }
                  </tbody>

          </table>
      </div>
    )
  }
}
