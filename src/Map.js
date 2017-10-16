import React from 'react';
import { compose, withProps } from "recompose";
import  * as withScriptjs from 'react-google-maps/lib/withScriptjs';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
 

const Map = compose(
  withScriptjs.default,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom = {8}
    defaultCenter = {{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
);

export default Map;
