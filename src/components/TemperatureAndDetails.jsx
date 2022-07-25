import React from 'react'
import './TemperatureAndDetails.css'
import { UilArrowUp, UilArrowDown , UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFormCode } from './service/WearherService'

function TemperatureAndDetails( {weather:
   {details, icon, temp, temp_min,temp_max, sunrise,
sunset, speed, humidity, feels_like, timezone, name, country}}) {
  return (
    <div>
        <div className='mainContainer'>
            <p className='details'>{details}</p>
            
        </div>

        <div className='mainContainer'>
            <div>
            <p className='mainCity'>{`${name}, ${country}`}</p>
               </div> 
             <div className='iconAndDegree'>
             <img className='mainIcon' src={iconUrlFormCode(icon)} />
             <p className='temp'>{`${temp.toFixed()} °`}</p></div>
             <div className='weatherInfo'>
                    <div className='miniInfo'>
                       <UilTemperature color='white'  size={18}/>
                           <p> Feel like: <span>{`${feels_like.toFixed()} °`}</span></p>
                    </div>
                    <div className='miniInfo'>
                    <UilTear color='white' size={18}/>
                   <p> Humidity: <span>{`${humidity.toFixed()}%`}</span></p>
                     </div>
                    <div className='miniInfo'>
                    <UilWind color='white' size={18}/>
                   <p> Wind speed: <span>{`${speed.toFixed()} km/h`}</span> </p>
                    </div>
             </div>
             
        </div>
       
        <div className='sunset' >
           <div className='iconSunset'> <UilSun/></div> 
           <div > <p> Sunrise: {" "} <span>{formatToLocalTime(sunrise, timezone, "hh:mm a" )} </span></p></div>
            <div> <p> Sunset: {" "} <span>{formatToLocalTime(sunset, timezone, "hh:mm a" )}</span></p></div>
        </div>

    </div>
  )
}

export default TemperatureAndDetails