import React from 'react';

import classes from './CountryDataCard.module.css';

const CountryDataCard = ({ dataCountry, showCountryCard, errorFetch }) => {
  const country = {
    flag: dataCountry.flags?.png,
    name: dataCountry.name?.common,
    capital: dataCountry.capital ?? '',
    population: dataCountry.population ?? 0,
  };

  if (showCountryCard)
    return (
      <div className={classes.card}>
        <div className={classes['country-name']}>
          <h3>{country.name}</h3>
        </div>
        <img src={country.flag} alt={`${country.name} flag`} />
        <div className={classes['country-capital__label']}>
          {`Capital: ${country.capital}`}
        </div>
        <div className={classes['country-population__label']}>
          {`population: ${country.population}`}
        </div>
      </div>
    );
};

export default CountryDataCard;
