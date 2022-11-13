import "./App.css";
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';
import CountriesList from "./Components/CountriesList";
import list from './countries.json'
import CountryDetails from "./Pages/CountryDetails";
import {useState} from 'react'; 

function App() {
  
  const [allCountries, setAllCountries] = useState(list); 

  return (
  <div className="App">
    <Navbar />
    <div className='container'>
      <div className='row' >

    <CountriesList allCountries={allCountries}/>
      </div>
    </div>
    <Routes>
     <Route path="country/:countryID" element={ <CountryDetails allCountries={allCountries} /> } />
    </Routes>
  </div>
  )
}
export default App;