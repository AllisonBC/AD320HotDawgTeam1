import React, { Component } from 'react';
import CartItems from './CartItems';
import './ShoppingCart.css';

export default class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: 1,
        name: 'Chicago Dawg',
        price: 7,
        quantity: 1
      },
      {
        id: 2,
        name: 'Denver Dawg',
        price: 9,
        quantity: 1
      },
      {
        id: 3,
        name: 'Chicago Dawg',
        price: 7,
        quantity: 2
      },
      {
        id: 4,
        name: 'Denver Dawg',
        price: 9,
        quantity: 1
      }
    ]
  }
  render() {
    return(
      <div className="wrap cf">
        <div className="heading cf">
          <h1>YOUR DAWGS</h1>
          <input
            type="submit" 
            value="Continue Shopping >" 
            className="btn" />
        </div>
        <div className="cart">
          <ul>
          <CartItems cartItems={ this.state.cartItems } />
          </ul>
        </div>

        <input
            type="submit" 
            value="Checkout >" 
            className="btn" />

      </div>
    ); 
  }
}

