import React, { Component } from 'react';
import Card1component from './Cards1/Card1component';
import Testimonials from './Testimonials/Testimonials';

export default class HomePage extends Component {
  render() {
    return <div>
      

      <Card1component/>
      <Testimonials/>
    </div>;
  }
}
