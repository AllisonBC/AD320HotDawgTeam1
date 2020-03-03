import React from 'react';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './App.css';

import Home from '../Home';
import Admin from '../Admin';
import Vendor from '../Vendor';
import Menu from '../Menu';

import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

const App = () => {
  return (
    
    <div className="App">
      <Router>
      {/* Uses a transparent header that draws on top of the layout's background */}
          <div style={{height: '250px'}}>
            <Layout style={{background: 'url(/seattlenight.jpg) center / cover'}}>
              <Header transparent title="Sup Dawg?" style={{color: 'white', margin: '0, auto'}}>
                <Navigation>
                    <Link to="/">ORDER</Link>
                    <Link to="/vendor">VENDOR LOGIN</Link>
                    <Link to="/admin">ADMIN LOGIN</Link>
                </Navigation> 
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Drawer>
            <Content>
              <div>
              <Route path='/' exact strict component={Home}/>
           <Route path='/admin' exact strict component={Admin}/>
      <Route path='/vendor' exact strict component={Vendor}/>
      <Route path='/menu' exact strict component={Menu}/>
              </div>
            </Content> 
        </Layout>
    </div>


    </Router> 
    </div>
  );
  
}

export default App;
