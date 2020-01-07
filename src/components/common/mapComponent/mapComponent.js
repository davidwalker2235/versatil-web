import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapComponent = withScriptjs(withGoogleMap(props =>
  <div style={{width: "100%"}}>
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 41.350252, lng: 2.082554 }}
    >
      <Marker
        position={{ lat: 41.350252, lng: 2.082554 }}
      />
    </GoogleMap>
  </div>
));

export default MapComponent;
