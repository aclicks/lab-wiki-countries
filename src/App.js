import "./App.css";
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';
import CountriesList from "./Components/CountriesList";
import list from './countries.json'
import CountryDetails from "./Pages/CountryDetails";

function App() {
  return <div className="App">
    <Navbar />
    <CountriesList list={list}/>
    <Routes>
      {/* <Route path='/' element='HomePage'/> */}
      {/* <Route path='/CountryDetails' element={<CountryDetails/>} /> */}
    </Routes>
  </div>;

}
export default App;