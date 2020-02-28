import React, { Component } from 'react';
import './App.css';
import Map from '../Map';
import dawg from './images/dawg.png';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Contact from '../Contact';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} 
          to="/">HotDogApp</Link>} scroll>
        </Header>
        <Map />
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">HotDogApp</Link>}>
            <Navigation>
              <Link to="/History">About</Link>
              <Link to="/Menu">Admin Login</Link>
              <Link to="/Vendors">Vendor Login</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Contact/>
        </Content>
    </Layout>
     
</div>

    );
  }
}

export default App;
