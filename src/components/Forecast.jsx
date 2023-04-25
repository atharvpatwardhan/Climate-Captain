import React from 'react'

export const Forecast = ({data}) => {

    const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    const dayWeek = new Date().getDay();
    const forecastdays = weekdays.slice(dayWeek,weekdays.length).concat(weekdays.slice(0,dayWeek));

    // const forecasteddays = [data.list[0],data.list[8],data.list[16],data.list[24],data.list[32],data.list[39]];




  return (
    <div className='text-white' style={{"marginTop":"50%","marginLeft":"2%","position":"absolute"}}>
        <br />

        <br />
        <br />
        <div className='flex'>
            {data.list.slice(0,7).map((obj,index)=>{
                return(
                    <div className='mx-5 rounded-xl shadow-lg bg-gradient-to-b from-blue-700 via-blue-500 to-blue-700' style={{"width":"15%"}} key={index}>
                        <div style={{"padding":"20px"}}>
                            <h1 className='text-2xl'>{forecastdays[index]}</h1>
                            <img src={`icons/${obj.weather[0].icon}.png`} alt='weather icon' style={{"marginTop":"5%"}}/>
                            <h2 className='text-xl'>{Math.round(obj.main.temp)} °C</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
