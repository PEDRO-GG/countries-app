import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import Countries from "./Countries";
import InvalidQuery from "./InvalidQuery";
import SelectedCountry from "./SelectedCountry";

const url = "https://restcountries.eu/rest/v2";

function App() {
  //1. State
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [invalidQuery, setInvalidQuery] = useState(false);
  const [selectCountry, setSelectedCountry] = useState("");

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    setRegion("");
  };
  const changeRegion = (e) => {
    setRegion(e.target.value);
    setSearchTerm("");
  };

  //2. Fetch from API
  useEffect(() => {
    const getAllCountries = async () => {
      const response = await fetch(url + "/all");
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    };

    const getCountriesBasedOfQuery = async () => {
      const response = await fetch(url + `/name/${searchTerm}`);

      if (response.status !== 200) {
        setInvalidQuery(true);
      } else {
        const data = await response.json();
        setCountries(data);
        setInvalidQuery(false);
      }
    };

    const getCountriesBasedOfRegion = async () => {
      const response = await fetch(url + `/region/${region}`);
      const data = await response.json();
      setCountries(data);
    };

    if (region) {
      getCountriesBasedOfRegion();
    } else if (searchTerm) {
      getCountriesBasedOfQuery();
    } else {
      getAllCountries();
    }
  }, [searchTerm, region]);

  //3. UI
  if (isLoading) {
    return <Loading />;
  }
  if (selectCountry) {
    return (
      <main>
        <Header />
        <SelectedCountry
          country={selectCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </main>
    );
  }
  return (
    <main>
      <Header />

      <div className="search-and-filter">
        <Search searchTerm={searchTerm} changeSearchTerm={changeSearchTerm} />
        <Filter changeRegion={changeRegion} />
      </div>

      {invalidQuery ? (
        <InvalidQuery query={searchTerm} />
      ) : (
        <Countries
          setSelectedCountry={setSelectedCountry}
          countries={countries}
        />
      )}
    </main>
  );
}

export default App;
