import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Weather from './components/weather';
//import "bootstrap/dist/css/bootstrap.min.css";


const App = ()=> {

  //const api_key = "7f22e0094f5aff55119058db85682a95";
  // all = "api.openweathermap.org/data/2.5/weather?q=cairo&appid=7f22e0094f5aff55119058db85682a95"
  const [weather , setWeather] = useState([]);
  const [search,setSearch] =useState("");
  const [query,setQuery] = useState("cairo");

  function ToCelsius(tem) {
    let cell = Math.floor(tem - 273.15);
    return cell;
  };

  useEffect(()=>{
    const fetchWeather= async  () => {
    const result = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=7f22e0094f5aff55119058db85682a95`);
    setWeather(result.data);
    console.log(result.data);
    }
    fetchWeather()
  },[query]);

  const updateSearch=(e)=>{
      setSearch(e.target.value);
      
  }
  const getSearch =(e) =>{
    e.preventDefault();
    setQuery(search);
    
  }

  return (
    <>
      <form className='form' onSubmit={getSearch}>
        <div className="form-container">
          <div className="row">
            <div className="form-items">
              <input type="text" onChange={updateSearch} placeholder="City" className='form-control'/>
            </div>
            <div className="form-items">
              <button className='btn-get-weather'>Search</button>
            </div>
          </div>
        </div>
      </form>
      
      <Weather 
      cityName={weather.name}
      countryName={weather?.sys?.country}
      tempMin={ToCelsius(weather?.main?.temp_min)} 
      tempMax={ToCelsius(weather?.main?.temp_max)} 
      temp={ToCelsius(weather?.main?.temp)} 
      main={weather.weather[0].main}     
      description={weather.weather[0].description} 
      />
    </>
  );
}

export default App;
