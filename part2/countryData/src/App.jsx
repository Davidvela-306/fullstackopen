import { useEffect, useState } from "react";
import counriesService from "./services/countriesService";

import SearchForm from "./components/SearchForm";
import MatchList from "./components/MatchList";
import countriesService from "./services/countriesService";

const App = () => {
  const [allCountries, setAllCountries] = useState(null);
  const [countriesFound, setCountriesFound] = useState(null);
  const [weather, setWeather] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const getCountries = () => {
    counriesService
      .getAllCountries()
      .then((countries) => setAllCountries(countries))
      .catch((err) => console.error(err));
  };
  useEffect(getCountries, []);

  if (!allCountries) return <p style={loading}>Loading...</p>;

  const handleChangeValue = (e, searchCountry = e.target.value) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    const countries = allCountries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchCountry.toLowerCase());
    });
    searchCountry === ""
      ? (setCountriesFound(""), setWeather(null))
      : setCountriesFound(countries);

    if (countries.length === 1) {
      const pais = countries[0];
      const lat = pais.capitalInfo.latlng[0];
      const lon = pais.capitalInfo.latlng[1];
      countriesService
        .getWeather(lat, lon)
        .then((capitalWeather) => {
          setWeather(capitalWeather), setWeather(capitalWeather);
        })
        .catch((err) => console.error(err));
    } else {
      setWeather(null);
    }
  };

  return (
    <>
      <SearchForm
        text="Find Countries: "
        searchValue={searchValue}
        handleChangeValue={handleChangeValue}
      />
      <MatchList
        countriesFound={countriesFound}
        weather={weather}
        handleChangeValue={handleChangeValue}
      />
    </>
  );
};

const loading = {
  flex: 1,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "30px",
};
export default App;
