import React from 'react'
import './TopButtons.css'

function TopButtons({setQuery}) {
    const cities =[
        {
            id:1,
            title: 'London'
        },
        {
            id:2,
            title: 'Minsk'
        },
        {
            id:3,
            title: 'Granada'
        },
        {
            id:4,
            title: 'Malaga'
        }
    ]


  return (
    <div className='conta'>
    <div className='buttons'>
        {cities.map(city=>(
            <button color='white' key={city.id} className='btn' onClick={()=>setQuery({q: city.title})}><p> {city.title}</p></button>
        ))}
    </div>
    </div>
  )
}

export default TopButtons