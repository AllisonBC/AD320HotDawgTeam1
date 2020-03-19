import React, { Component } from 'react'
import Proptypes from 'prop-types';

export default class OrderHistLineItem extends Component {
  
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
            Order Date
            { this.props.orderLineItem.orderInfo.orderDate }
            Order Rating
            { this.props.orderInfo.orderVendorCartInfo.orderRating } 
            { this.props.orderInfo.orderVendorCartInfo.id }            
            { this.props.orderInfo.orderVendorCartInfo.vendorName } */}

          </div>
        </div>
      </section>

    )
  }
}

OrderHistLineItem.propTypes = {
  orderHistLineItem: Proptypes.object.isRequired
}
