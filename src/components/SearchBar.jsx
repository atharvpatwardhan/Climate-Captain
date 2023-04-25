import { AsyncPaginate } from "react-select-async-paginate";

import React, { useState } from 'react'

import { geoApiUrl,geoDBApiOptions } from "../api";



export const SearchBar = ({onSearchChange}) => {

    const [search,setSearch] = useState(null);

    const loadOptions = (input) => {
        return fetch(`${geoApiUrl}/cities?minPopulation=1000000&namePrefix=${input}`
        ,geoDBApiOptions)
        .then((response)=>response.json())
        .then((response)=>{
            return{
                options : response.data.map((location) => {
                    return {
                        value: `${location.latitude} ${location.longitude}`,
                        label : `${location.name}, ${location.countryCode}`,
                    }
                })
            }
        })
        .catch((err)=>console.log(err))
    }  




    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);

    }


    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '5px',
            border: '2px solid #ccc',
            boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
            backgroundColor:'white'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#3699FF' : null,
            color: state.isFocused ? 'white' : null,
        }),
    }


  return (
    <div className="text-center" style={{"position":"absolute","marginLeft":"25%","marginTop":"2%","width":"50%"}}>
        <div className="flex" >
        <h1 style={{"marginTop":"8%","marginLeft":"16%"}} className="font-semibold text-6xl bg-yellow-500 bg-clip-text text-transparent">Climate Captain</h1>
        <img src={`icons/01d.png`} alt="sun" style={{"marginBottom":"0%"}}/>
        </div>
        <br />
        <br />
        <br />
        <br />

        <AsyncPaginate
        placeholder="Search for a city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={customStyles}
         />
    </div>
  )
}
