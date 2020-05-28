import React, { useState, useCallback, useRef } from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api';
import '../App.css';
import locationData from '../data/location-info.json'

export default function FindRecycler() {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyA-U9tVnswDVHRfHH3DLhc-Y8HWFksQyNQ"
  });

  const [selected, setSelected] = useState(null);
  const onMap = useRef();
  const onMapLoad = useCallback((map) => {
    onMap.current = map;
  }, [])

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (

    <div>
      <form >
        <input 
          type="text" 
          className="search" 
          
        />
      </form>

      <GoogleMap 
        mapContainerClassName="map"
        zoom={10} 
        center={{lat: 41.878113, lng: -87.629799}}
        onLoad={onMapLoad}
      >
        <MarkerClusterer 
          options={ "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" }
        >
          {clusterer =>
            locationData.map(RecycleCenter => (
              <Marker
                key={RecycleCenter.id}
                position={{
                  lat: RecycleCenter.location[0],
                  lng: RecycleCenter.location[1]
                }}

                clusterer={clusterer}

                onClick={() => {
                  setSelected(RecycleCenter);
                }}
                icon={{
                  url: '/icon16.png',
                  scaledSize: new window.google.maps.Size(30,30)
                }}
              />
            ))
          }
        </MarkerClusterer>

        {selected && (
          <InfoWindow 
            position={{
              lat: selected.location[0],
              lng: selected.location[1]
            }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2> { selected.name } </h2>
              <h3> { selected.subname } </h3>
              <p> Phone: { selected.phone } </p>
              <a href={selected.directions} target="_blank" rel="noopener noreferrer">Get Directions</a>
            </div>
          </InfoWindow>
        )}

      </GoogleMap>
    
    </div>
  )
  
}