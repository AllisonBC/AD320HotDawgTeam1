import React, { Component } from 'react';
import './App.css';
import Map from '../Map';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Contact from '../Contact';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">HotDogApp</Link>} scroll>
            <Navigation>
                <Link to="/History">History</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Vendors">Vendors</Link>
                <Link to="/contact">Carts</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">HotDogApp</Link>}>
            <Navigation>
              <Link to="/History">History</Link>
              <Link to="/Menu">Menu</Link>
              <Link to="/Vendors">Vendors</Link>
              <Link to="/carts">Carts</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Contact/>
        </Content>
    </Layout>
    <Map />
</div>

    );
  }
}

export default App;
