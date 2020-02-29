import React from 'react';

import './Home.css';
import map from '../Home/images/googleMap.png';

import Header from '../Header';

const Home = ()=> {
    return(
        
        <div className = "HomeWrapper">
        <main className = 'HomeMain'>
        <p><a href="https://oracleofbacon.org/" target="_blank">Kevin Bacon Kevin Bacon</a> ipsum dolor amet rump beef pork belly jerky 
        prosciutto meatloaf landjaeger burgdoggen jowl venison. Ground round meatball pig pork jerky. 
        Andouille porchetta t-bone brisket meatball kevin biltong shoulder, strip steak pancetta ribeye 
        tongue venison cow frankfurter. Cow swine rump, cupim shoulder andouille corned beef strip
        steak bresaola ground round turkey jerky filet mignon. Bresaola alcatra cupim,
        drumstick shoulder turducken swine sirloin venison kevin.
        </p>
        <p>
        Burgdoggen pork belly kielbasa jowl tri-tip pork loin buffalo fatback chislic
        tenderloin chuck beef. Cow pancetta filet mignon kevin shankle chicken cupim short
        ribs shoulder picanha. Rump filet mignon beef ribs tail pork chop. Drumstick beef ribs
        corned beef sausage rump. Shank turducken brisket, sirloin salami beef pork belly doner
        chislic rump picanha kielbasa alcatra. Ham landjaeger doner pig cupim picanha beef.
        Chislic fatback hamburger rump, spare ribs cupim drumstick short ribs alcatra.
        </p>    
        </main>

        <aside className = 'HomeMap'>
            <h1>MAP ELEMENT GOES HERE</h1>
            <img src = {map}></img>
        </aside> 
        </div>   

    
        )
}

export default Home;