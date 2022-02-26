import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { fetchdata } from "../api";

const MapBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
  height: 100%;
`;

function Map() {
  const {isLoading, data} = useQuery("esports", fetchdata)
 
  console.log(data);
  const mapProps = {
    center: { lat: 0, lng: 0 },
    zomm: 11,
  };
  return (
    <MapBox id="map">
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLEMAP_API_KEY}` }}
        defaultCenter={mapProps.center}
        center={coord}
        defaultZoom={mapProps.zomm}
        onChange={(e) => {
          setCoord({ lat: e.center.lat, lng: e.center.lng });
          setBound({ ne: +e.marginBounds.ne, sw: +e.marginBounds.sw });
        }}
      ></GoogleMapReact> */}
    </MapBox>
  );
}

export default Map;
