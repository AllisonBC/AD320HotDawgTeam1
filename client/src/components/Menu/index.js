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
        price: 7,
        description: 'ingredients description',
        quantity: 0
      },
      {
        id: 2,
        name: 'Denver Dog',
        price: 9,
        description: 'ingredients description',
        quantity: 0
      },
      {

      id: 3,
      name: 'Chicago Dog',
      price: 7,
      description: 'ingredients description',
      quantity: 0
    },
    {
      id: 4,
      name: 'Denver Dog',
      price: 9,
      description: 'ingredients description',
      quantity: 0
    },
    {

    id: 5,
    name: 'Chicago Dog',
    price: 7,
    description: 'ingredients description',
    quantity: 0
  },
  {
    id: 6,
    name: 'Denver Dog',
    price: 9,
    description: 'ingredients description',
    quantity: 0
  }
    ]
  }

  render() {
    return (
      <div className = "HomeWrapper">   
      <div className = "HomeMain"> 
        <ShoppingCart />
        <h2>MENU ITEMS</h2>
        
      <div className = "column">
        <MenuItems menuItems={ this.state.menuItems } /> 

      </div>
      </div>   
      </div>    
    );    
  }
}
export default Menu;
