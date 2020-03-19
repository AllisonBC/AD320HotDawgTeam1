import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HotDogStockImage from "../../hotdogitemimage.jpg";


export default class CartItem extends Component {
  
  render() {
    return (
      <div className="infoWrap">
        <div className="cartSection">
          <img src={ HotDogStockImage } 
            className="itemImg" 
            alt="hotdogitemimage">
          </img> 
          <h3>{ this.props.cartItem.name }</h3>    
            <p>
              { this.props.cartItem.quantity } x { this.props.cartItem.price } 
            </p>                 
        </div>
        <div className="cartSection prodTotal">
          <p className="cartSection prodTotal">

          { this.props.cartItem.quantity*this.props.cartItem.price }
          </p>
          </div>
          <div className="cartSection removeWrap">
          <button className="remove">x</button>
        </div>

      </div>

    )
  }
}


// PropTypes
CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired  
}