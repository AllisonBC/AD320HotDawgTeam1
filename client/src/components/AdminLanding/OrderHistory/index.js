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
          orderVendorCartInfo: 
            {
              id: 1,
              vendorName: 'Vendor-McVendorface1'
            }
        },
        {
          id: 123457,
          orderDate: 1/1/20,
          orderRating: 3,
          orderVendorCartInfo: 
            {
              id: 2,
              vendorName: 'Vendor-McVendorface2'
            }
        },
        {
          id: 123458,
          orderDate: 1/1/20,
          orderRating: 5,
          orderVendorCartInfo: 
            {
              id: 3,
              vendorName: 'Vendor-McVendorface3'
            }
        },
        {
          id: 123459,
          orderDate: 1/1/20,
          orderRating: 4,
          orderVendorCartInfo: 
            {
              id: 4,
              vendorName: 'Vendor-McVendorface4'
            }
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


