import React, { Component } from 'react'
import Proptypes from 'prop-types';

export default class OrderLineItem extends Component {
  
  render() {
    return  (
      <section>
        <div className="band-container">
          <div className="band-inner">
            <div className="band-head">
            Order Vendor ID:   Order Vendor Name:              
            </div>
            <div className="band-body">
              OrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderID
              OrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderID
              OrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderID
            </div>
            {/* { this.props.orderInfo.id }
            Order Menu Item Name
            { this.props.orderInfo.orderMenuItemInfo.menuItemName }
            Scheduled Order Pickup Time
            { this.props.orderLineItem.orderInfo.scheduledOrderPickupTime }
            Order Prepared?
            { this.props.orderInfo.orderComplete }
            Order Picked Up?
            { this.props.orderInfo.orderPickedUp }
            
            { this.props.orderInfo.orderVendorCartInfo.id }
            
            { this.props.orderInfo.orderVendorCartInfo.vendorName } */}

          </div>
        </div>
      </section>

    )
  }
}

OrderLineItem.propTypes = {
  orderLineItem: Proptypes.object.isRequired
}
