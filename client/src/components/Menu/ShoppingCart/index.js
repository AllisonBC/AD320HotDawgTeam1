import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CartItems from './CartItems';
import CheckoutComplete from './CheckoutComplete';
import Menu from '../../Menu';
import './ShoppingCart.css';
import Totals from './Totals';



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
      <Router>
        
        <div className="wrap cf">
        
        <div className="heading cf">
          <h1>YOUR DAWGS</h1>


            <Link to="/menu/">
              <button
                type="button"
                className="btn">
                Continue Shopping
                </button>
                
              </Link>
        </div>
        
        <div className="cart">
          <ul className="cartWrap">
          <CartItems cartItems={ this.state.cartItems } />
          </ul>
        </div>
        <div className="subtotal cf">
        <Totals />  

         
        <Link to="/checkout_complete/">
        <button
            type="button" 
            className="btn" >
            Submit Payment
            </button>
        </Link>
        </div>  


      </div>
      <Route path="/menu/" component={ Menu }/>
        <Route path="/checkout_complete/" component={ CheckoutComplete }/>
      </Router>
    ); 
  }
}

