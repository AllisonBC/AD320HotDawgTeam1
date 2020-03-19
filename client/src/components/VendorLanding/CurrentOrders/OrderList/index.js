import React, { Component } from 'react'
import PropTypes from 'prop-types';
import OrderLineItem from '../OrderLineItem';


export default class OrderList extends Component {
  render() {
    return this.props.orderList.map( (orderLineItem) =>(
      <div>
      <OrderLineItem key={ orderLineItem.id } orderLineItem={ orderLineItem } />        
      </div>
    ));
  }
}

// PropTypes
OrderList.propTypes = {
  orderList: PropTypes.array.isRequired
}
