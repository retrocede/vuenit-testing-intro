const apiKey = "72d71a99d34bbe1025d383bbbe864c75";
const baseUrl = "http://api.weatherstack.com/";

export default {
  fetchWeather({ state }) {
    console.log("key: ", apiKey);
    console.log("baseUrl: ", baseUrl);

    alert(state.location);
  },
};
