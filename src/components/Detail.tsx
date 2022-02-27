import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { fetchHotelDetail, HotelDetail } from "../api";
import { clickedMarkAtom } from "../atom";
import Loader from "./Loader";

const Container = styled.div`
  background-color: white;
  width: 550px;
  max-width: 600px;
  position: fixed;
  left: 30px;
  top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-shadow: 5px 5px 2px 2px rgba(0, 0, 0, 0.3);
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 1.3px;
`;
const IMG = styled.div<{ bg: string }>`
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 500px;
  height: 290px;
`;
const Caption = styled.div`
  margin-bottom: 8px;
  font-size: 10px;
`;

const Main = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;
const Address = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  text-decoration: underline;
`;
const Rank = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
`;
const Des = styled.div`
  font-size: 13px;
`;
const Others = styled.div`
  padding: 10px;
  h1 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
const Amenis = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 24px;
  div {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const Contact = styled.div`
  font-size: 14px;
  margin-top: 12px;
`;
function Detail() {
  const clicked = useRecoilValue(clickedMarkAtom);
  const { isLoading, data: detailData } = useQuery<HotelDetail>(
    ["hotel", clicked],
    fetchHotelDetail
  );
  const hotel = detailData?.data[0];
  console.log(hotel);
  return (
    <>
      {isLoading ? <Loader/>  : hotel ? (
        <Container>
          <Title>{hotel.local_name ? hotel.local_name : hotel.name}</Title>
          <IMG bg={hotel.photo.images.original.url} />
          <Caption>{hotel.photo.caption}</Caption>
          <Main>
            <Rank>
              ⭐ {hotel.hotel_class} / {hotel.ranking}
            </Rank>
            <Address>Address : {hotel.address}</Address>
            <Des>{hotel.description.length> 400 ? hotel.description.slice(0,399) + "..." : hotel.description}</Des>
          </Main>
          <Others>
            <h1> AMENITIES </h1>
            {hotel.amenities.length > 14 ? (
              <Amenis>
                {hotel.amenities.slice(0, 14).map((a) => (
                  <div> {a.name} </div>
                ))}
                <div>more ...</div>
              </Amenis>
            ) : (
              <Amenis>
                {hotel.amenities.map((a) => (
                  <div> {a.name} </div>
                ))}
              </Amenis>
            )}
            <h1> CONTACT</h1>
            <Contact>
              {hotel.phone}, {hotel.email}
            </Contact>
          </Others>
        </Container>
      ) : null}
    </>
  );
}

export default Detail;
