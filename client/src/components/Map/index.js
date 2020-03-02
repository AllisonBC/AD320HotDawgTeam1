import React, {     useState } from 'react';
import {GoogleMap,
        withScriptjs,
        withGoogleMap,
        Marker, 
        InfoWindow
    } from 'react-google-maps';

import cartData from './mock';



const Map = () => {
    const [selectedCart, setSelectedCart] = useState(null);
    return(
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat: 47.6205 , lng: -122.3493}} 
        >
            {cartData.map(cart => (
                <Marker 
                    key = {cart.id} 
                    position={{
                        lat: cart.latitude,
                        lng: cart.longitude
                    }}
                    onClick={() =>{
                        setSelectedCart(cart);
                    }}
                    icon={{
                        url: "/vector1.svg",
                        scaledSize: new window.google.maps.Size(30,30)
                    }}                  
                />
            ))}

            {selectedCart && (
                <InfoWindow
                    position={{
                        lat: selectedCart.latitude,
                        lng: selectedCart.longitude 
                    }}
                    onCloseClick ={() =>{
                        setSelectedCart(null);
                    }}    
                    >
                <div>
                    <h1>Click here to order from Cart #{selectedCart.id}</h1>
                    <p>
                    {selectedCart.address}<br />
                    {selectedCart.city}, {selectedCart.state} {selectedCart.zipcode}<br />
                    Hours: {selectedCart.open} - {selectedCart.close}
                </p></div>
                </InfoWindow>
            )}
        </GoogleMap>    
    );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function MyMap(){
    console.log(process.env.REACT_APP_GOOGLE_KEY);
    console.log('THIS IS MY KEY', process.env.REACT_APP_GOOGLE_KEY)
    return(
        <div style = {{width: '400px', height: '400px', margin: '0 auto'}}>
        <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
            libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style ={{ height: "100%"  }}/>}
            containerElement={<div style ={{ height: "100%"  }}/>}
            mapElement={<div style ={{ height: "100%"  }}/>}
            />
        </div>     
    )
};