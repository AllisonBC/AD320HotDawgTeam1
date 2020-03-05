import React, { Component } from 'react';
import './MenuItems.css';
import MenuItem from '../MenuItem';
import PropTypes from 'prop-types';


export default class MenuItems extends Component {



  render() {
    return this.props.menuItems.map((menuItem) => (
      <MenuItem key={menuItem.id} menuItem={menuItem} />
  
    ));    
  }
}

// PropTypes
MenuItems.propTypes = {
  menuItems: PropTypes.array.isRequired
}
    
