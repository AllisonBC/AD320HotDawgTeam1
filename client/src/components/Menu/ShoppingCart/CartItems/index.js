import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';

export default class CartItems extends Component {
  render() {
    return this.props.cartItems.map( (cartItem) => (
      <li className="items">
      <CartItem key={ cartItem.id } cartItem={ cartItem } />
      </li>
    ));    
  }
}

// PropTypes
CartItems.propTypes = {
  cartItems: PropTypes.array.isRequired
}
   