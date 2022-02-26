const requestHeaders: HeadersInit = new Headers();
requestHeaders.set(
  "x-rapidapi-host",
  "league-of-legends-esports.p.rapidapi.com"
);
requestHeaders.set("x-rapidapi-key", `${process.env.REACT_APP_API_KEY}`);

export const fetchdata = () => {
  return fetch("https://league-of-legends-esports.p.rapidapi.com/teams", {
    method: "GET",
    headers: requestHeaders,
  }).then((res) => res.json());
};
