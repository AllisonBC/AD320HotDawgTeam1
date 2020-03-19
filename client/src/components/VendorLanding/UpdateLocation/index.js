import React, { Component } from 'react';
import MyMap from '../../Map';

import "./UpdateLocation.css";

export default class UpdateLocation extends Component {
  render() {
    return (
      <div className="map">
        <MyMap className="map" />
      </div>
    )
  }
}