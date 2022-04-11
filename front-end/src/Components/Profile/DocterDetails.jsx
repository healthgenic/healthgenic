import React, { Component } from 'react'

export default class DocterDetails extends Component {
  render() {
    return (<div className='container'>

        <h2 className='text-center mt-4 mb-2'>Patient Management System</h2> 
          <table className="table table-striped table-bordered mt-2">
              <thead>
                    <th>Patient Name</th>
                    <th>Mail ID</th>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Gender</th>
                    <th>Blood Group</th>

              </thead>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

              <tbody>

              </tbody>
          </table>
      </div>
    )
  }
}
