import React from 'react';

import classes from './InputSearchCountry.module.css';

const InputSearchCountry = ({
  onEnteredCountry,
  enteredCountry,
  onDataCountry,
  onErrorFetch,
  errorFetch,
}) => {
  const inputChangeHandler = e => {
    onEnteredCountry(e.target.value);
  };

  const fetchCountry = async country => {
    if (country === '') return;
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) {
      new Error('Country not found');
      onErrorFetch(true);
    }
    if (response.ok) {
      const data = await response.json();
      onDataCountry(data.at(0));
      onErrorFetch(false);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    fetchCountry(enteredCountry);
    onEnteredCountry('');
  };

  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <div className={classes['input-container']}>
        <input
          className={classes.input}
          onChange={inputChangeHandler}
          value={enteredCountry}
        />
      </div>
      {errorFetch && <p style={{ color: 'red' }}>Entered country not found</p>}
      <div className={classes['button-container']}>
        <button className={classes.button}>Search</button>
      </div>
    </form>
  );
};

export default InputSearchCountry;
