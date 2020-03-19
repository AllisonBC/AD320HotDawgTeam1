import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import OrderHistory from "./OrderHistory";
import CurrentOrders from "./OrderHistory";
import CartMenu from "./CartMenu";
import UpdateLocation from "./UpdateLocation";

import "./VendorLanding.css";

export default class VendorLanding extends Component {
  state = 
  { 
    vendorUserInfo: 
      {
        id: 1,
        name: 'Vendor-McVendorFace'
      },
    }
  render() {
    return (
      <Router>
        <div className="l-nav">
          <nav className="nav">
            <ul>
              <li className="vendorUsername">Welcome,</li>
              <li className="vendorUsername">{ this.state.vendorUserInfo.name }</li>
              <Link to="/vendorid_current_orders">Current Orders</Link>
              <Link to="/vendorid_order_history">Order History</Link>
              <Link to="/vendorid_cart_menu">Cart Menu</Link>
              <Link to="/vendorid_update_location">Update Location</Link>

            </ul>
            <input type="submit" value="Logout" className="btn" />
          </nav>
        </div>
        <Route path="/vendorid_current_orders" component={ CurrentOrders } />
        <Route path="/vendorid_order_history" component={ OrderHistory } />
        <Route path="/vendorid_cart_menu" component={ CartMenu } />
        <Route path="/vendorid_update_location" component={ UpdateLocation } />

      </Router>
    );
  }
}