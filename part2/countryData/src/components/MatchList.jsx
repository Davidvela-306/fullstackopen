/* eslint-disable react/prop-types */
const MatchList = ({ countriesFound, handleChangeValue }) => {
  if (!countriesFound) return null;

  return (
    <>
      {countriesFound.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countriesFound.length === 1 ? (
        countriesFound.map((country) => {
          return (
            <div key={country.name.common}>
              <h1>{country.name.common}</h1>
              <p>capital {country.capital[0]}</p>
              <p>Area {country.area}</p>
              <br />
              <h2>Languages</h2>
              <ul>
                {Object.values(country.languages).map((language) => {
                  return (
                    <li
                      style={{ listStyle: "inside", padding: "6px" }}
                      key={language}
                    >
                      {language}
                    </li>
                  );
                })}
              </ul>
              <br />
              <img
                style={{
                  width: "250px",
                  boxShadow: "0 0 10px gray",
                  padding: "10px",
                }}
                src={country.flags.png}
                alt={`flag of ${country.flags.alt}`}
              />
            </div>
          );
        })
      ) : (
        countriesFound.map((country) => {
          return (
            <div
              style={{ display: "flex", gap: "10px", margin: "10px" }}
              key={country.name.common}
            >
              <p>{country.name.common}</p>
              <button
                onClick={(e) => handleChangeValue(e, country.name.common)}
              >
                show
              </button>
            </div>
          );
        })
      )}
    </>
  );
};

export default MatchList;
