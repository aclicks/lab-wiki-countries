import { useParams, Link } from 'react-router-dom';


function CountryDetails({ allCountries }) {
  const { countryID } = useParams();
  const countrySelected = allCountries.find(
    (country) => country.alpha3Code === countryID
  );
  const borders = countrySelected.borders;
  const countriesBorders = allCountries.filter((country) =>
    borders.includes(country.alpha3Code)
  );

  return (
    <div>
      <h1>{countrySelected.name.official}</h1>
      <h2>Capital</h2>
    {countrySelected.capital}
      <h2>Area</h2>
        {countrySelected.area}km
          <sup>2</sup>
       <h2>Borders</h2>
        <ul>
            {countriesBorders.map((countryBorder) => {
              return (
                <li key={countryBorder.alpha3Code}>
                  <Link to={`/country/${countryBorder.alpha3Code}`}>
                    {countryBorder.name.common}
                  </Link>
                </li>
              );
            })}
          </ul>
    </div>
  );
}

export default CountryDetails;
