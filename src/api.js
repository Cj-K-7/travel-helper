import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

export const getPlaceData = async ( sw, ne ) => {
    try {
        const { data } = await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'c49dfaf1f3mshaef240f594806e8p1d52cejsn10f9e913851b'
            //process.env.REACT_APP_RAPID_API_KEY
          }
        })
        return data;
    } catch (error) {
 }
}