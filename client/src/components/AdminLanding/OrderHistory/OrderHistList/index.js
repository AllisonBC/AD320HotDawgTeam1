import React, { Component } from 'react'
import PropTypes from 'prop-types';
import OrderHistLineItem from '../OrderHistLineItem';


export default class OrderHistList extends Component {
  render() {
    return this.props.orderHistList.map( (orderHistLineItem) =>(
      <div>
      <OrderHistLineItem key={ orderHistLineItem.id } orderHistLineItem={ orderHistLineItem } />        
      </div>
    ));
  }
}

// PropTypes
OrderHistList.propTypes = {
  orderHistList: PropTypes.array.isRequired
}