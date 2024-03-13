import { useEffect } from "react"
import { useState } from "react"
import Country from "./Country"

export default function Countrys(){
    let [ countrys , setCountrys ]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then( res=> res.json())
        .then( data => setCountrys(data))
    } ,[])


    return(
        <>
        <h1> country-name: {countrys.length}</h1>
        {
            countrys.map( country=> <Country country={country}> </Country>)
        }
        
        
        
        
        
        
        
        
        
        
        </>
    )
}