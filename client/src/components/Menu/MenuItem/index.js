import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuantityIncrementor from '../QuantityIncrementor';

export default class MenuItem extends Component {

  render() {
    return (
      <div>
      <p>          
      { this.props.menuItem.name }
      </p>  
      <QuantityIncrementor updateQuantity={this.updateQuantity} />     
      </div>
    )
  }
}

// PropTypes
MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired  
}

