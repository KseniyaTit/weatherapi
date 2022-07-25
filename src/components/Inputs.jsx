import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import './Inputs.css'


function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState('')
  const handleSearchClick =() =>{
    if (city !== '') setQuery({q: city})
  }
const handleLocationClick = ()=>{
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat =position.coords.latitude
      let lon = position.coords.longitude

      setQuery({lat,lon})
    })
  }
}

const handleUnitsChange =(e)=>{
  const selectedUnit = e.currentTarget.name
  if (units !== selectedUnit) setUnits(selectedUnit)
}

  return (
    <div className='inputsContainer'>
      
    
    <div className='inputCont'>
    <input value={city} onChange={(e)=>setCity(e.currentTarget.value)}
     type="text" placeholder='Search for city ...' className='input1' />
     <UilSearch onClick={handleSearchClick} className='text-white' size={25}/>
    <UilLocationPoint onClick={handleLocationClick} className='text-white ' size={25}/>
    </div>
    
    <div><button className='btn' onClick={handleUnitsChange}> <p > °C </p></button> </div>
    <span>|</span>
    <div><button className='btn'> <p >°F</p> </button>
    
    </div>
    
       
     

      
    </div>
  )
}

export default Inputs