import React, { Component } from "react";
export default class Alert extends Component {
  render() {
    if (this.props.action === "success") {
      return (
        <div className="alert alert-success fade show">
          <strong>{this.props.title}</strong>
          {this.props.message}
        </div>
      );
    } else if (this.props.action === "failure") {
      return (
        <div className={this.props.classList}>
          <strong>{this.props.title}</strong>
          {this.props.message}
        </div>
      );
    }
    return (
      <>
        <div className={this.props.classList}>
          <strong>{this.props.title}</strong>
          {this.props.message}
        </div>
      </>
    );
  }
}
