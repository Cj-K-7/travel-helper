import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { clickedMarkAtom } from "../atom";

const Layer = styled.div``;
const Icon = styled.div<{selected : boolean}>`
  background-color: white;
  border-radius: 10px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
  border : ${props=> props.selected ? "5px solid #00AA50" : "none"};
`;
const MarkerIconSVG = styled.svg`
  width: 16px;
  height: 16px;
`;

interface MarkerProps {
  onClick: ()=>void;
  id: string;
  lat: string;
  lng: string;
}

function Marker({ onClick, id, lat, lng }: MarkerProps) {
  const nowDetail = useRecoilValue(clickedMarkAtom);
  const selected = nowDetail === id
  
  return (
    <Layer onClick={onClick} >
      <Icon selected={selected}>
        <MarkerIconSVG fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z" />
        </MarkerIconSVG>
      </Icon>
    </Layer>
  );
}

export default Marker;
