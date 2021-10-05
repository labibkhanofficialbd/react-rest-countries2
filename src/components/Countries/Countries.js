import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h1>{countries.length} Countries Loaded</h1>
            <div className='countries-container'>
            {
                countries.map(country => <Country 
                    country={country}
                    key={country.alpha3code}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;