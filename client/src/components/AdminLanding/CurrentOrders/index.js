import React, { Component } from 'react';

import OrderList from './OrderList';
import './CurrentOrders.css'

export default class CurrentOrders extends Component {
  state = 
  { 
    orderInfo: [
    
      {
        id: 123456,
        scheduledOrderPickupTime: '12:00 p.m.',
        orderComplete: true,
        orderPickedUp: true,
        orderMenuItemInfo: 
        {
          id: 2,
          menuItemName: 'Denver Dawg'
        },
        orderVendorCartInfo: 
          {
            id: 1,
            vendorName: 'Vendor-McVendorface1'
          }
      },


      {
        id: 123457,
        scheduledOrderPickupTime: '12:00 p.m.',
        orderComplete: true,
        orderPickedUp: true,
        orderMenuItemInfo: 
        {
          id: 1,
          menuItemName: 'Chicago Dawg'
        },
        orderVendorCartInfo: 
          {
            id: 2,
            vendorName: 'Vendor-McVendorface2'
          }
      },
      {
        id: 123458,
        scheduledOrderPickupTime: '12:00 p.m.',
        orderComplete: true,
        orderPickedUp: true,
        orderMenuItemInfo: 
        {
          id: 1,
          menuItemName: 'Chicago Dawg'
        },
        orderVendorCartInfo: 
          {
            id: 3,
            vendorName: 'Vendor-McVendorface3'
          }
      },
      {
        id: 123459,
        scheduledOrderPickupTime: '12:00 p.m.',       
        orderComplete: true,
        orderPickedUp: true,
        orderMenuItemInfo:         
        {
          id: 2,
          menuItemName: 'Denver Dawg'
        },
        orderVendorCartInfo: 
          {
            id: 4,
            vendorName: 'Vendor-McVendorface4'
          }
      }
      ]
  }
  render() {
    return(
      <div className="l-page">
        <OrderList orderList={ this.state.orderInfo }/>
      </div>      
    )
  }
}
