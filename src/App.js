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

  // console.log(currentWeather);
  // console.log(forecast);

//from-blue-700 to-blue-500 from-blue-700 to-blue-500
  return (
    <div className='App sm:h-[1300px] h-[2900px]'>
    <div className="">
      <div className='sm:mask'>
      <SearchBar onSearchChange={handleOnSearchChange} />
      {currentWeather && <Weather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <Footer />
      </div>
    </div>
    </div>
  );
}

export default App;
