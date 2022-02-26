import styled from "styled-components";
import Map from "./Map";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function UI() {
  return (
    <Container>
      <Map />
    </Container>
  );
}

export default UI;
