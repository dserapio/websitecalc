import React from 'react';
import GoogleMapReact from "google-map-react"
import locationData from '../data/location-info.json'
import '../App.css';

const FindRecycler = () => (
  <div className="map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyA-U9tVnswDVHRfHH3DLhc-Y8HWFksQyNQ" }}
      defaultCenter={ {lat: 41.878113, lng: -87.629799} }
      defaultZoom={ 10 }
    >
      {locationData.map(loc => (
        <Marker
          key={loc.id}
          lat={loc.location[0]}
          lng={loc.location[1]}
          name={loc.name}
          phone={loc.phone}
        />
      ))}
    </GoogleMapReact>
  </div>
);

const Marker = ({name}) => (
  <div 
    className="marker" 
    title = {name}
  />
);

export default FindRecycler;