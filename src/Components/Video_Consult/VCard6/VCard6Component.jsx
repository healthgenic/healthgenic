import React, { Component } from "react";

import { Link } from "react-router-dom";


export default class VCard6Component extends Component {
  render() {
    return (
        <div class="p-3 mb-2 bg-dark text-white bg-opacity-75">
            <div className="row">
              <div className="col-3 text-center">
                <h3>1,00,000+</h3>
                <p>Happy Users</p>
              </div>
              <div className="col-3 text-center">
                <h3>10+</h3>
                <p>Specialities</p>
              </div>
              <div className="col-3 text-center">
                <h3>200+</h3>
                <p>Verified Doctors</p>
              </div>
              <div className="col-3 text-center">
                <h3>4.5 / 5</h3>
                <p>App Rating</p>
              </div>
            </div>
        </div>
    );
  }
}
