import React from 'react';

import './Home.css';
import map from '../Home/images/googleMap.png';

import Header from '../Header';
import Footer from '../Footer';
import MyMap from '../Map';



const Home = ()=> {
    
    return(
        
        <div className = "HomeWrapper">
            <Header />
        <main className = 'HomeMain'>
        <h1>Our Story</h1>
        <p>Sup Dawg? No seriously, what's up? The fact that you are on our website tells us you are hungry,
            and you have come to the right place! Sup Dawg was created one day out of frustration for the lack
            of food available at 3 in the morning after a late night out. Fueled by all locally sourced ingredients
            and constructed with love, Sup Dawg offers the best gourmet hot dogs in the entire Seattle area. Please 
            click on the map to pick a cart and begin your order. See you soon!
            
        </p>
        </main>

        <aside className = 'HomeMap'>
            <h1>Select a cart from the map!</h1>
            <MyMap />
        </aside>
        <Footer /> 
        </div>      
        )
}
export default Home;