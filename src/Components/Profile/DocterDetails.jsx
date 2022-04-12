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

        <h2 className='text-center mt-4 mb-4'>Patient Management System</h2> 
          <table className="table table-striped table-bordered mt-2">
              <thead>
                    
                    <th className='text-center'>Patient Name</th>
                    <th className='text-center'>Doctor Selected</th>
                    <th className='text-center'>Mobile Number</th>
                    <th className='text-center'>Mail ID</th>
                    <th className='text-center'>Date</th>
                    <th className='text-center'>Day</th>
                    <th className='text-center'>Gender</th>
                    <th className='text-center'>HealthIssue</th>
                    <th className='text-center'>Blood Group</th>
                    <th className='text-center'>Schedule Appointment</th>

              </thead>
              <tbody>
                      {
                          this.state.patient.map(
                              patient => 
                            <tr key={patient.userName}>
                                <td>{patient.userName}</td>
                                <td>{patient.name}</td>
                                <td>{patient.mnumber}</td>
                                <td>{patient.mailid}</td>
                                <td>{patient.date}</td>
                                <td>{patient.day}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.hIssue}</td>
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
