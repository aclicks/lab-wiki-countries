import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function CountriesList({ allCountries }) {
  return (
    <div className='col-5' >
      {allCountries.map((e) => {
        return (
          <div className="list-group" key={e.alpha3Code}>
            
          <Link to={`/country/${e.alpha3Code}`} className="list-group-item list-group-item-action" >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`}
              alt={`small-flag-${e.alpha3Code}`}
              width="35px"
            />
            <span>{e.name.common}</span>
          </Link>
          
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
