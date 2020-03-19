import React, { Component } from 'react'

import OrderHistList from './OrderHistList';
import './OrderHistory.css'

export default class OrderHistory extends Component {
  state = 
    { 
      orderHistInfo: 
      [
        {
          id: 123456,
          orderDate: 1/1/20,
          orderRating: 5,

        },
        {
          id: 123457,
          orderDate: 1/1/20,
          orderRating: 3,

        },
        {
          id: 123458,
          orderDate: 1/1/20,
          orderRating: 5,

        },
        {
          id: 123459,
          orderDate: 1/1/20,
          orderRating: 4,
        }
      ] 
    }
  render() {
    return (
      <div className="l-page">
        <OrderHistList orderHistList={ this.state.orderHistInfo }/>
      </div> 
    )
  }
}
