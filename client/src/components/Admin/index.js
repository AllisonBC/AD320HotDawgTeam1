import React , { Component } from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import MyMap from '../Map';
import OrderHistory from './OrderHistory';
import CurrentOrders from './CurrentOrders';
import Analytics from './Analytics';
import CartMenu from './CartMenu';
import UpdateLocation from './UpdateLocation';

import './Admin.css';


export default class Admin extends Component {
  render() {
    return (
      
      <div className="map">
                
        <Route path='/analytics' exact strict component={Analytics}/>
      <div className="l-nav">
        <nav className="nav">           
          <ul>
            <li className='adminUsername'>Welcome, @AdminUserName</li>
            <li><Link to='/current_orders'>Current Orders</Link></li>
            <li><Link to='/order_history' >Order History</Link></li>
            <li><Link to='/cart_menu' >Cart Menu</Link></li>
            <li><Link to='/update_location' >Update Location</Link></li>
            {/* <li><Link to='/admin' >Select Cart</Link></li> */}
            <li><Link to='/analytics' >Analytics</Link></li>


          </ul>
          <input  type="submit" 
                  value="Logout"
                  className="btn" />                
        </nav>
      </div>      
        <MyMap className="map"/>
        <Switch>
        <Route path="/current_orders">
          <CurrentOrders />
        </Route>
        <Route path="/order_history">
          <OrderHistory />
        </Route>
        <Route path="/cart_menu">
          <CartMenu />
        </Route>
        <Route path="/update_location">
          <UpdateLocation />
        </Route>
        <Route path="/analytics">
          <Analytics />
        </Route>
      </Switch>
      </div>

 


    );
  }
}