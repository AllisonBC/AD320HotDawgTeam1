import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Home/Home.css';
import OrderHistory from "./OrderHistory";
import CurrentOrders from "./CurrentOrders";
import Analytics from "./Analytics";
import CartMenu from "./CartMenu";
import UpdateLocation from "./UpdateLocation";
import SelectCart from "./SelectCart";

import "./Admin.css";

export default class AdminLanding extends Component {

  state={
    menus: [],
    menu: {
      price: 'Price',
      title:'Title',
      descript:'Description'
    },
    adminUserInfo: 
    {
      id: 1,
      name: 'Admin-McAdminFace'
    }

  }

  componentDidMount(){
    this.getMenus();
  }

  
  getMenus=_=>{
    fetch('http://localhost:4000/api/menu')
      .then(response=>response.json())
      .then(response=>this.setState({menus:response.data}))
      .catch(err=>console.error(err))
  }
  
  addMenu=_=>{
    const{menu} = this.state;
    fetch(`http://localhost:4000/api/menu/add?price=${menu.price}&title=${menu.title}&discript=${menu.descript}`)
    .then(this.getMenus)
    .catch(err=>console.error(err))
  }

renderMenu=({dogId,title})=><div key={dogId}>{title}</div>
  
  render() {
    const {menus,menu}=this.state;
    return (
      <div className="LandingWrapper">
        <div className="MenuItems">
          <h1 className = "MenuListHeader">YOU ARE ALLOWED TO ADD MENU ITEMS FROM HERE</h1>
          <h1 className = "ActualMenus"> {menus.map(this.renderMenu)} </h1>
          <div className="AddMenu"> 
            <input className = "Title" value = {menu.title}
            onChange={e=>this.setState({menu: {...menu, title:e.target.value}})}/> 
            <input  className = "Price" value= {menu.price}
            onChange={e=>this.setState({menu: {...menu, price:e.target.value}})}/>
            <input className = "Discription" value = {menu.descript}
            onChange={e=>this.setState({menu: {...menu, descript:e.target.value}})}/>
          </div>
        <button className="AddMenuButton" onClick={this.addMenu}> ADD MENU </button>
      
        </div>
      
        <Router>
    
        <div className="l-nav">
          <nav className="nav">
            <ul>
              <li className="adminUsername">Welcome,</li>
              <li className="adminUsername">{ this.state.adminUserInfo.name }</li>
              <Link to="/current_orders">Current Orders</Link>
              <Link to="/order_history">Order History</Link>
              <Link to="/cart_menu">Cart Menu</Link>
              <Link to="/update_location">Update Location</Link>
              <Link to="/admin">Select Cart</Link>
              <Link to="/analytics" replace>
                Analytics
              </Link>
            </ul>
            <input type="submit" value="Logout" className="btn" />
          </nav>
        </div>
        <Route path="/admin" component={SelectCart} />
        <Route path="/current_orders" component={CurrentOrders} />
        <Route path="/order_history" component={OrderHistory} />
        <Route path="/cart_menu" component={CartMenu} />
        <Route path="/update_location" component={UpdateLocation} />
        <Route path="/analytics" component={Analytics} />
      </Router>
    </div>
    );
  }
}
