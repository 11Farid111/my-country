import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    // console.log(country)
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple': 'green'}}>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p> Code:<small>{cca3}</small></p>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Flag</button>
            <br />
            <button onClick={() =>handleVisitedCountry(country) }>Mark visited</button>
            <br />
            <button onClick={handleVisited}>{visited? 'Visited': 'Going'}</button>
            {visited?  'I have visited this country': 'I want to visit'}
        </div>
    );
};

export default Country;