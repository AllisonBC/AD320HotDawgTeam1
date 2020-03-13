import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './App.css';

import Home from '../Home';
import Admin from '../Admin';
import Vendor from '../Vendor';
import Menu from '../Menu';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';

import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

//All routes are created on this page using imported components.

const App = () => {
  return (
    
    <div className="App"> 
      <Router>
      {/* Uses a transparent header that draws on top of the layout's background */}
          <div style={{height: '250px'}}>
            <Layout style={{background: 'url(/seattlenight.jpg,) center / cover'}}>
              <Header transparent title="SUP DAWG?" style={{color: 'white', margin: '0, auto'}}>
                <Navigation>
                    <Link to="/">ORDER</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/menu">MENU</Link>
                </Navigation> 
            </Header>
            <Drawer title="EMPLOYEE LINKS">
                <Navigation>
                    <Link to="/vendor">VENDOR LOGIN</Link>
                    <Link to="/admin">ADMIN LOGIN</Link>
                </Navigation>
            </Drawer>
            <Content>
              <div>
                <Route path='/' exact strict component={Home}/>
                <Route path='/about' exact strict component={About}/>
                <Route path='/contact' exact strict component={Contact}/>
                <Route path='/admin' exact strict component={Admin}/>
                <Route path='/vendor' exact strict component={Vendor}/>
                <Route path='/menu' exact strict component={Menu}/>
              </div>
            </Content> 
        </Layout>
      <Footer />
      </div>
    </Router> 
    </div>    
  );
  
}

export default App;
