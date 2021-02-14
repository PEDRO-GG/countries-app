import Country from "./Country";

const Countries = ({ setSelectedCountry, countries }) => {
  return (
    <div className="countries-grid">
      {countries.map((country) => {
        return (
          <Country
            setSelectedCountry={setSelectedCountry}
            key={country.name}
            country={country}
          />
        );
      })}
    </div>
  );
};
export default Countries;
