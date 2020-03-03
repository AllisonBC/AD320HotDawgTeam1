import React from 'react';

import './Home.css';
import map from '../Home/images/googleMap.png';

import Header from '../Header';
import Footer from '../Footer';
import MyMap from '../Map';



const Home = ()=> {
    
    return(
        
        <div className = "HomeWrapper">
        <main className = 'HomeMain'>
        <h1>Welcome to Sup Dawg!</h1>
        <p>Please select a cart to begin your order!</p>
            <MyMap className = "Map" />
        </main>
        </div>      
        )
}
export default Home;