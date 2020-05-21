import React, { Component } from 'react';
import GoogleMapReact from "google-map-react"
import '../App.css';

class FindRecycler extends Component {
  static defaultProps = {
    center: {
      lat: 41.878113,
      lng: -87.629799
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA-U9tVnswDVHRfHH3DLhc-Y8HWFksQyNQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default FindRecycler;