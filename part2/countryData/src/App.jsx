import { useEffect, useState } from "react";
import counriesService from "./services/countriesService";

import SearchForm from "./components/SearchForm";
import MatchList from "./components/MatchList";

const App = () => {
  const [allCountries, setAllCountries] = useState(null);
  const [countriesFound, setCountriesFound] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const getCountries = () => {
    counriesService
      .getAll()
      .then((countries) => setAllCountries(countries))
      .catch((err) => console.error(err));
  };
  const handleChangeValue = (e) => {
    e.preventDefault();
    const searchCountry = e.target.value;
    setSearchValue(e.target.value);
    const countries = allCountries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchCountry.toLowerCase());
    });
    searchCountry === "" ? setCountriesFound("") : setCountriesFound(countries);
  };

  useEffect(getCountries, []);

  if (!allCountries) return <p>Loading...</p>;

  return (
    <>
      <SearchForm
        text="Find Countries: "
        searchValue={searchValue}
        handleChangeValue={handleChangeValue}
      />
      <MatchList countriesFound={countriesFound} />
    </>
  );
};

export default App;
