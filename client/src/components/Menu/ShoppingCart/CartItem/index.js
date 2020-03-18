import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HotDogStockImage from "../../hotdogitemimage.jpg";
import QuantityIncrementor from '../../QuantityIncrementor';

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
            <QuantityIncrementor /> 
            x { this.props.cartItem.price } 
          </p>
                 
      </div>
      </div>

    )
  }
}
// PropTypes
CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired  
}