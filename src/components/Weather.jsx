import React from 'react'
// from-orange-600 to bg-orange-400

export const Weather = ({data}) => {

    const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dayWeek = new Date().getDay();
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();


  return (
    <div className='text-center justify-center' style={{"marginTop":"25%","marginLeft":"23%","position":"absolute","width":"55%"}}>
        <div className='shadow-2xl justify-center rounded-xl bg-gradient-to-b from-blue-700 via-blue-400 to-blue-600  text-white' style={{"alignSelf":"center"}}>
            <div className='flex' style={{"padding":"50px"}}>
                <div style={{"marginLeft":"5%"}}>
                <h1 className='text-4xl'>{data.city}</h1>
                <br />
                <h1 className='text-xl'>{data.weather[0].description}</h1>
                <div className='flex'>
                <img src={`icons/${data.weather[0].icon}.png`} alt='weather icon' style={{"marginTop":"5%"}}/>
                <h3 className='text-6xl' style={{"marginTop":"16%","marginLeft":"0%"}}>{Math.round(data.main.temp)} °C</h3>

                </div>

                </div>

                <div className='text-left' style={{"marginLeft":"25%"}}>
                <h3 className='text-lg'>{weekdays[dayWeek]}</h3>
                <h3>{date} {months[month]} {year} </h3>
                <br />
                <br />
                
                <div className='text-left' style={{"marginLeft":"0%","lineHeight":"2","marginTop":"4%"}}>
                <h3>Feels like  {Math.round(data.main.feels_like)} °C</h3>
                <h3>Humidity : {data.main.humidity} </h3>
                <h3>Max Temperature : {Math.round(data.main.temp_max)} °C</h3>
                <h3>Min Temperature : {Math.round(data.main.temp_min)} °C</h3>
                </div>
                </div>
                
                
            </div>

        </div>


    </div>
  )
}
