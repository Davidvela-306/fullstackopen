import axios from "axios";
// const API_KEY = import.meta.env.VITE_SOME_KEY;
const CountriesUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
console.log("All env variables: ", import.meta.env);

const API_KEY = import.meta.env.VITE_API_KEY;
console.log("API_KEY: ", API_KEY);

const getAllCountries = async () => {
  const req = axios.get(CountriesUrl);
  const res = await req;
  return res.data;
};
const getWeather = async (lat, lon) => {
  const req = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`
  );
  const res = await req;
  return res.data;
};

export default { getAllCountries, getWeather };
