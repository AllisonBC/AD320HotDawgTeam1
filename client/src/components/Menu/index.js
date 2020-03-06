import React, { Component } from 'react';
import MenuItems from './MenuItems';
import ShoppingCart from './ShoppingCart';

import './Menu.css';

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
  },
  {
    id: 7,
    name: 'Chicago Dog',
    price: 7,
    description: 'ingredients description',
    quantity: 0
  },
  {
    id: 8,
    name: 'Denver Dog',
    price: 9,
    description: 'ingredients description',
    quantity: 0
  },
  {

  id: 9,
  name: 'Chicago Dog',
  price: 7,
  description: 'ingredients description',
  quantity: 0
},
{
  id: 10,
  name: 'Denver Dog',
  price: 9,
  description: 'ingredients description',
  quantity: 0
},
{

id: 11,
name: 'Chicago Dog',
price: 7,
description: 'ingredients description',
quantity: 0
},
    ]
  }

  render() {
    return (
      // <body>
        <section className="content">
          <div className="container">
            <ShoppingCart />
            <div className="menutitle">MENU ITEMS</div>
            
            <div className = "columns thirds">
              <MenuItems menuItems={ this.state.menuItems } /> 

          </div>
          </div>
        </section>

    );    
  }
}
export default Menu;
