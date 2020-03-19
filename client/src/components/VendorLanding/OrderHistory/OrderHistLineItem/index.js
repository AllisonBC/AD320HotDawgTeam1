import React, { Component } from 'react'
import Proptypes from 'prop-types';

export default class OrderHistLineItem extends Component {
  
  render() {
    return  (
      <section>
        <div className="band-container">
          <div className="band-inner">
            <div className="band-head">
            Order ID:   Order Date:              
            </div>
            <div className="band-body">
              OrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderID
              OrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderID
              OrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderIDOrderID
            </div>
            {/* { this.props.orderInfo.id }
            Order Menu Item Name
            { this.props.orderInfo.orderMenuItemInfo.menuItemName }
            { this.props.orderLineItem.orderInfo.orderDate }
            Order Rating
            { this.props.orderInfo.orderVendorCartInfo.orderRating }  */}

          </div>
        </div>
      </section>

    )
  }
}

OrderHistLineItem.propTypes = {
  orderHistLineItem: Proptypes.object.isRequired
}
