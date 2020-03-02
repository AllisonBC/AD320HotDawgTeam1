import React from 'react';
import {GoogleMap,
        withScriptjs,
        withGoogleMap,
        Marker
    } from 'react-google-maps';
import cartData from './mock';
import REACT_APP_GOOGLE_KEY from '../.env.local';

const Map = () => {
    return(
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat: 47.6205 , lng: -122.3493}} 
            >
                {cartData.map(cart => (
                    <Marker 
                        key = {cart.id} 
                        position=
                            {{lat: cart.latitude,
                            lng: cart.longitude}}/>
            ))}
        </GoogleMap>    
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MyMap(){
    return(
        <div style = {{width: '100vw', height: '100vh'}}>
        <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
            libraries=geometry,drawing,places&key=REACT_APP_GOOGLE_KEY`}
            loadingElement={<div style ={{ height: "100%"  }}/>}
            containerElement={<div style ={{ height: "100%"  }}/>}
            mapElement={<div style ={{ height: "100%"  }}/>}
            />
</div>
        
    )

};