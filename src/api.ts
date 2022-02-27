const API_key = process.env.REACT_APP_API_KEY;

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": `${API_key}`,
  },
};

export interface Hotel {
  location_id: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  awards: object;
  preferred_map_engine: string;
  autobroaden_type: string;
  autobroaden_label: string;
  ranking_position: string;
  ranking_denominator: string;
  ranking: string;
  distance: string;
  distance_string: object;
  bearing: string;
  is_closed: boolean;
  is_long_closed: boolean;
  price_level: string;
  hotel_class: string;
  business_listings: object;
  special_offers: object;
}

export interface HotelResult {
  data: Hotel[];
  paging: { result: number; total_result: number };
  status: {};
}
interface photo {
  caption: string;
  helpful_votes: string;
  id: string;
  images: {
    original: {
      width: number;
      url: string;
      height: number;
    };
  };
}
interface amenities {
  key: string;
  name: string;
}

interface HotelDetailProps {
  location_id: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  photo: photo;
  awards: object;
  preferred_map_engine: string;
  raw_ranking: string;
  ranking_geo: string;
  ranking_geo_id: string;
  ranking_position: string;
  ranking_denominator: string;
  ranking_category: string;
  ranking: string;
  subcategory_type: string;
  subcategory_type_label: string;
  distance: object;
  distance_string: object;
  bearing: object;
  rating: string;
  is_closed: boolean;
  is_long_closed: boolean;
  price_level: string;
  price: string;
  neighborhood_info: object;
  hotel_class: string;
  hotel_class_attribution: string;
  business_listings: object;
  special_offers: object;
  listing_key: string;
  description: string;
  web_url: string;
  write_review: string;
  ancestors: object;
  category: { key: string; name: string };
  subcategory: object;
  parent_display_name: string;
  guide_count: string;
  is_jfy_enabled: boolean;
  nearest_metro_station: object;
  phone: string;
  website: string;
  email: string;
  address_obj: object;
  address: string;
  local_name: string;
  local_address: string;
  local_lang_code: string;
  is_candidate_for_contact_info_suppression: boolean;
  amenities: amenities[];
  photo_count: string;
  has_review_draft: boolean;
  has_panoramic_photos: boolean;
  rating_histogram: object;
  room_tips: object;
}

export interface HotelDetail {
  data: HotelDetailProps[];
  status: object;
}

export const fetchHotelsdata = ({ queryKey }: any) => {
  const [, bounds] = queryKey;
  const { ne, sw } = bounds;
  return fetch(
    `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary?bl_latitude=${sw.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&tr_latitude=${ne.lat}&limit=30&subcategory=hotel%2Cbb%2Cspecialty&adults=1`,
    options
  ).then((res) => res.json());
};

export const fetchHotelDetail = ({ queryKey }: any) => {
  const [, location_id] = queryKey;
  return fetch(
    `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${location_id}`,
    options
  ).then((res) => res.json());
};
