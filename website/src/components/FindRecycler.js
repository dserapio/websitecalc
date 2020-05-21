import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
import '../App.css';

function Map() {
  return (
    <GoogleMap 
      defaultZoom={10}
      defaultCenter={{ lat: 41.878113, lng: -87.629799}}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function FindRecycler() {
  return (
    <div className="map">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
        loadingElement={<div style={{ height: "100%"}} />}
        containerElement={<div style={{ height: "100%"}} />}
        mapElement={<div style={{ height: "100%"}} />}
      />
    </div>
  )
}
