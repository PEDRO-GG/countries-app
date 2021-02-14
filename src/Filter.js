const Filter = ({ changeRegion }) => {
  return (
    <div className="filter">
      <select
        onChange={changeRegion}
        name="select-region"
        id="select-region"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
