import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { getPlaceData } from "../api";
import { useEffect, useState } from "react";

const MapBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function Map() {
  const [data, setData] = useState({});
  const [coord, setCoord] = useState({ lat: 0, lng: 0 });
  const [bound, setBound] = useState({ ne: 0, sw: 0 });

  useEffect(() => {
    getPlaceData(bound.sw, bound.sw).then((res) => {
      setData(res);
      console.log(data);
    });
  }, [coord, bound, data]);

  navigator.geolocation.getCurrentPosition((position) => {
    setCoord({ lat: position.coords.latitude, lng: position.coords.longitude });
  });

  const mapProps = {
    center: { lat : 0, lng: 0 },
    zomm: 11,
  };
  return (
    <MapBox>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLEMAP_API_KEY}` }}
        defaultCenter={mapProps.center}
        center={coord}
        defaultZoom={mapProps.zomm}
        onChange={(e) => {
          setCoord({ lat: e.center.lat, lng: e.center.lng });
          setBound({ ne: +e.marginBounds.ne, sw: +e.marginBounds.sw });
        }}
      ></GoogleMapReact>
    </MapBox>
  );
}

export default Map;
