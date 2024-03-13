import { useEffect } from "react"
import { useState } from "react"

export default function Countrys(){
    let [ countrys , setCountrys ]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then( res=> res.json())
        .then( data => setCountrys(data))
    } ,[])


    return(
        <>
        <h1> country-name:</h1>
        {
            countrys.map( country=> console.log(country))
        }
        
        
        
        
        
        
        
        
        
        
        </>
    )
}