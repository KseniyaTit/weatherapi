import React from 'react'
import './Forecast.css'
import { iconUrlFormCode } from './service/WearherService'

function Forecast({title, items}) {
  return (
    <div>
        <div className='titleBlock'>
            <p className='title'>{title}</p>
        </div>
        <hr size={5} className='line'/>

        <div className='forecastContainer'>
            {items.map((item,index)=> (
                    <div key={index} className='forecastCard'>
                    <p >
                       {item.title}
                    </p>
                    <img src={iconUrlFormCode(item.icon)} alt="" />
                    <p className='degree'> {`${item.temp.toFixed()} º`}</p>
            </div>
            ))}
           

            


        </div>
    </div>
  )
}

export default Forecast