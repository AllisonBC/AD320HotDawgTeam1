import React from 'react';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './App.css';

import Home from '../Home';
import Admin from '../Admin';
import Vendor from '../Vendor';
import Menu from '../Menu';

const App = () => {
  return (
<Router>
    

    
    
    <div className="App">


      <Route path='/' exact strict component={Home}/>
      <Route path='/admin' exact strict component={Admin}/>
      <Route path='/vendor' exact strict component={Vendor}/>
      <Route path='/menu' exact strict component={Menu}/>
      


    </div>
    <footer className = 'FooterNav'>
      <NavLink to="/">Customer | </NavLink>
      <NavLink to="/menu">Menu | </NavLink>
      <NavLink to="/vendor">Vendor | </NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </footer>
    </Router>

    

  );
  
}

export default App;
