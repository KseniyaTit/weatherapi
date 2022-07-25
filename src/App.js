
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './components/service/WearherService';
import getFormattedWeatherData from './components/service/WearherService';
import { useState, useEffect } from 'react';

function App() {

const [query,setQuery] = useState({q: 'berlin'});
const [units, setUnits] = useState('metric');
const[weather, setWeather]= useState(0)


useEffect (()=>{
  const fetchWeather =async ()=>{
    await getFormattedWeatherData({...query, units}).then(data =>{
                  setWeather(data)
    })
   
  };
  fetchWeather()

}, [query, units])



  return (
    <div className="App">
      <div className='wrapper'>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units setUnits/>

        {weather && (
          <div>
            <TimeAndLocation weather={weather}/>
           <TemperatureAndDetails weather={weather}/>
            <Forecast title='Hourly forecast' items ={weather.hourly}/>
            <Forecast title='Daily faorecast' items={weather.daily}/>
          </div>
        )}
        </div>
  </div>
  );
}

export default App;
