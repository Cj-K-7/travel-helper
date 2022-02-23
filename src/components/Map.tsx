import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

const MapBox = styled.div`
  width: 100%;
  height: 100%;
`;

function Map() {
  let lat:number = 37.541;
  let lng:number = 126.986;

  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
  });

  const mapProps = {
    center: { lat, lng },
    zomm: 15,
  };
  return (
    <MapBox>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLEMAP_API_KEY}` }}
        defaultCenter={mapProps.center}
        defaultZoom={mapProps.zomm}
      >

      </GoogleMapReact>
    </MapBox>
  );
}

export default Map;
