import React from 'react';
import { compose, withProps } from "recompose";
import  * as withScriptjs from 'react-google-maps/lib/withScriptjs';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import {GOOGLE_MAP_URL, API_LOCATION} from './Configuration';

const Map = compose(
  withProps({
    googleMapURL: GOOGLE_MAP_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs.default,
  withGoogleMap)
(props => 
  <div>

  <GoogleMap
    defaultZoom = {2}
    center = {{lat: props.latitude, lng: props.longitude}}
  >
    <Marker title="Site Location" position={{ lat: props.latitude, lng: props.longitude }} />
    <Marker title="Current Location" position={{ lat: props.mylat, lng: props.mylong }} />

  </GoogleMap>
  </div>
);

class MyFancyMap extends React.PureComponent{
  render(){
    return(
      <div>
        <Map  
          latitude={this.props.latitude}
          longitude={this.props.longitude}
          mylat={this.props.mylat}
          mylong={this.props.mylong}
        />
      </div>
    );
  }
}

export default MyFancyMap;
