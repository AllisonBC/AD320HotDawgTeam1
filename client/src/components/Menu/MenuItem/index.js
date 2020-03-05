import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuantityIncrementor from '../QuantityIncrementor';
import HotDogStockImage from "../hotdogitemimage.jpg";
export default class MenuItem extends Component {

  render() {
    return (
      <div className="container">
        <div className = "item-title">{ this.props.menuItem.name } </div> 
        <img src={HotDogStockImage} class="item-image" alt="hotdogitemimage"></img>         
        <p>{ this.props.menuItem.price } </p>
        <p>{ this.props.menuItem.description } </p>        
       
        <QuantityIncrementor updateQuantity={this.updateQuantity} />     
      </div>
    )
  }
}

// PropTypes
MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired  
}

