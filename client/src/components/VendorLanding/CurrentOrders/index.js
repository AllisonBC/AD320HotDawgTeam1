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
        orderPickedUp: false,
        custName: McCustomer1,
        orderMenuItemInfo: 
        {
          id: 2,
          menuItemName: 'Denver Dawg'
        },
      },


      {
        id: 123457,
        scheduledOrderPickupTime: '12:00 p.m.',
        orderComplete: true,
        orderPickedUp: false,
        custName: McCustomer2,
        orderMenuItemInfo: 
        {
          id: 1,
          menuItemName: 'Chicago Dawg'
        },
      },
      {
        id: 123458,
        scheduledOrderPickupTime: '12:00 p.m.',
        orderComplete: true,
        orderPickedUp: true,
        custName: McCustomer3,
        orderMenuItemInfo: 
        {
          id: 1,
          menuItemName: 'Chicago Dawg'
        },
      },
      {
        id: 123459,
        scheduledOrderPickupTime: '12:00 p.m.',       
        orderComplete: true,
        orderPickedUp: true,
        custName: McCustomer4,
        orderMenuItemInfo:         
        {
          id: 2,
          menuItemName: 'Denver Dawg'
        },
      }
      ]
  }
  render() {
    return(
      <div className="l-page">
        <div className="menu">
        <div className="menu-hamburger">
        <OrderList orderList={ this.state.orderInfo }/>
      </div>
      </div>   
      </div>   
    )
  }
}
