import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountry = country =>{
        console.log('add visited country')
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags = flag =>{
        const newVisitedFlag = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlag)
    }
    return (
         
        <div>
                <h3>Countries:{countries.length}</h3>
                <div>
                    <h3>Visited Countries:{visitedCountries.length}</h3>
                    <ul>
                        {
                            visitedCountries.map(country =><li key ={country.cca3}>{country.name.common}</li>)
                        }
                    </ul>
                </div>
                <div className="flag">
                    {
                        visitedFlags.map((flag ,idx) => <img key={idx} src ={flag}></img>)
                    }
                </div>
                <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} country={country}
                handleVisitedCountry ={handleVisitedCountry}
                handleVisitedFlags ={handleVisitedFlags}
                ></Country> )
            }
            </div>
        </div>
    );
};

export default Countries;