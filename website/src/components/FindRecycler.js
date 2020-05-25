import React, { Component } from 'react';
import GoogleMapReact from "google-map-react"
import locationData from '../data/location-info.json'
import '../App.css';

const Marker = (props) => {
  const { locationName } = props;
  return (
    <div 
      className="marker" 
      title = { locationName }
    />
  );
};

class FindRecycler extends Component {
  static defaultProps = {
    center: {
      lat: 41.878113,
      lng: -87.629799
    },
    zoom: 10
  };

  render () {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA-U9tVnswDVHRfHH3DLhc-Y8HWFksQyNQ" }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
        >
            {locationData.map((loc, i) => {
              return (
                <Marker
                  key = {i}
                  lat = { loc.location[0] }
                  lng = { loc.location[1] }
                  locationName = { loc.name }
                  locationPhone = {loc.phone}
                />
              );
            })} 
        </GoogleMapReact>
      </div>
    );
  }
}

export default FindRecycler;