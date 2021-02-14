const SelectedCountry = ({ country, setSelectedCountry }) => {
  const {
    name,
    nativeName,
    flag,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;
  console.log(country);
  return (
    <div className="selected-country">
      <div
        onClick={() => {
          setSelectedCountry("");
        }}
        className="back-button-container"
      >
        <div className="arrow-icon"></div>
        <button>Back</button>
      </div>
      <div className="country-info-container">
        <img src={flag} alt={name} />
        <article>
          <h1>{name}</h1>

          <section>
            <div className="box-1">
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population: <span>{population}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p className="capital">
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div className="box-2">
              <p>
                Top Level Domain: <span>{topLevelDomain}</span>
              </p>
              <p>
                Currencies:
                {currencies.map((currency) => (
                  <span key={currency.symbol}> {currency.code}</span>
                ))}
              </p>
              <p>
                Languages:
                {languages.map((language) => (
                  <span key={language.name}> {language.name}</span>
                ))}
              </p>
            </div>
          </section>

          <h3>Borders:</h3>
          <div className="borders">
            {borders.map((border) => (
              <div key={border} className="border">
                {border}
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};
export default SelectedCountry;
