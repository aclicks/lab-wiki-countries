import { Link } from 'react-router-dom';

function CountriesList({ allCountries }) {
  return (
    <div>
      {allCountries.map((e) => {
        return (
          <Link to={`/country/${e.alpha3Code}`} key={e.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`}
              alt={`small-flag-${e.alpha3Code}`}
              width="35px"
            />
            <span>{e.name.common}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
