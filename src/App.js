import './App.css';
import { Weather } from './components/Weather';
import { SearchBar } from './components/SearchBar';

import { weatherUrl ,weatherKey } from './api';
import { useState } from 'react';
import { Forecast } from './components/Forecast';
import { Footer } from './components/Footer';

function App() {

  const [currentWeather,setcurrentWeather] = useState(null);
  const [forecast,setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
  const [lat,lon] = searchData.value.split(" ");

  // const lat = searchData.value.lat;
  // const lon = searchData.value.lon;

  console.log(searchData.value.lat);
  const currentWeatherFetch = fetch(`${weatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`);
  const forecastFetch = fetch(`${weatherUrl}/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=${weatherKey}&units=metric`);

  Promise.all([currentWeatherFetch,forecastFetch])
  .then(async (response) => {
    const weatherresponse = await response[0].json();
    const forecastresponse = await response[1].json();

    setcurrentWeather({city:searchData.label , ...weatherresponse});
    setForecast({city:searchData.label,...forecastresponse});

  })
  .catch((err)=>console.log(err));
  } 

  console.log(currentWeather);
  console.log(forecast);

//from-blue-700 to-blue-500 from-blue-700 to-blue-500
  return (
    <div>
    <div className="App" style={{"height":"1115px"}}>
      <div className='mask' style={{"height":"1115px"}}>
      <SearchBar onSearchChange={handleOnSearchChange} />
      {currentWeather && <Weather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
