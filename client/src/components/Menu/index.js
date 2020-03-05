import React, { Component } from 'react';
import '../Home/Home.css';
import './Menu.css';
import MenuItems from './MenuItems';
import ShoppingCart from './ShoppingCart';



class Menu extends Component {
  state = {
    menuItems: [
      {
        id: 1,
        name: 'Chicago Dog',
        quantity: 0
      },
      {
        id: 2,
        name: 'Denver Dog',
        quantity: 0
      }
    ]
  }

  render() {
    return (
      <div className = "HomeWrapper">   

        <MenuItems menuItems={ this.state.menuItems } />  
             
        <ShoppingCart />

      </div>      
    );    
  }
}
export default Menu;
