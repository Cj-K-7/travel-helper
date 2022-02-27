import styled from "styled-components";
import Detail from "./Detail";
import Map from "./Map";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
// const UIlayer = styled.div``;


function UI() {
  return (
    <Container>
      <Map />
      <Detail/>
    </Container>
  );
}

export default UI;
