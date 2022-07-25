import React from 'react'
import { formatToLocalTime } from './service/WearherService'
import './TimeAndLocations.css'


function TimeAndLocation({weather: {dt, timezone, name,country}}) {
  return (
    <div className='flexTime'>
        <div >
        <p>{formatToLocalTime(dt, timezone)}</p>
        </div> 
    </div>
  )
}

export default TimeAndLocation