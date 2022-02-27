import styled from "styled-components";
import GoogleMapReact, { Bounds, Coords } from "google-map-react";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchHotelsdata, HotelResult } from "../api";
import Marker from "./Marker";
import { useSetRecoilState } from "recoil";
import { clickedMarkAtom } from "../atom";
import Loader from "./Loader";

const MapBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

function Map() {
  const defaultMapProps = {
    center: { lat: 37.5642135, lng: 127.0016985 },
    zoom: 13,
  };

  const [coordinate, setCoordinate] = useState<Coords>(defaultMapProps.center);
  const [bounds, setBounds] = useState<Bounds>();
  const setClicked = useSetRecoilState(clickedMarkAtom);

  const { isLoading: isHotelsLoading, data: hotelsData } =
    useQuery<HotelResult>(["hotels", bounds], fetchHotelsdata);
  return (
    <MapBox>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${process.env.REACT_APP_GOOGLEMAP_API_KEY}`,
        }}
        defaultCenter={defaultMapProps.center}
        center={coordinate}
        defaultZoom={defaultMapProps.zoom}
        onChange={(event) => {
          setCoordinate({ lat: event.center.lat, lng: event.center.lng });
          setBounds(event.marginBounds);
        }}
      >
        {isHotelsLoading
          ? null
          : hotelsData?.data.map((hotel) => (
              <Marker
                key={hotel.name}
                onClick={() => setClicked(hotel.location_id)}
                id={hotel.location_id}
                lat={hotel.latitude}
                lng={hotel.longitude}
              />
            ))}
      </GoogleMapReact>
      {isHotelsLoading ? <Loader /> : null}
    </MapBox>
  );
}

export default Map;
