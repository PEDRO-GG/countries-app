const Country = ({ setSelectedCountry, country }) => {
  const { name, flag, population, region, capital } = country;
  return (
    <div className="country">
      <img onClick={() => setSelectedCountry(country)} src={flag} alt={name} />
      <article className="country-info">
        <h4>{name}</h4>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </article>
    </div>
  );
};
export default Country;
