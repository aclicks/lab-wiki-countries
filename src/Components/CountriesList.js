import { Link } from 'react-router-dom';
import {useState} from 'react'; 


function CountriesList({list}) {

  const [allCountries, setAllCountries] = useState(countries); 
  
  return (
    <div className="row">
      <div className="col-5" style="max-height: 90vh; overflow: scroll">
        <div className="list-group">
          {list.map((e) => {
            <Link to={`/e/${e.alpha3Code}`} className="list-group-item list-group-item-action" key={e.alpha3Code}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`} alt={`small-flag-${e.alpha3Code}`} width="35px"  />
                <span className="mx-2">{e.name.common}</span> 
            </Link>
          })}
          
          
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
