import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, flag, region, population} = props.country;
    return (
        <div className="country">
            <h4>This is: {name}</h4>
            <p>Capital is: {capital}</p>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Population is: {population}</p>
        </div>
    );
};

export default Country;