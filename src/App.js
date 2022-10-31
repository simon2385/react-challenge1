import React, { useState, useEffect } from 'react';

import Header from './Components/Layout/Header/Header';
import Card from './Components/UI/Card';
import InputSearchCountry from './Components/InputSearchCountry/InputSearchCountry';
import CountryDataCard from './Components/CountryDataCard/CountryDataCard';

import './App.css';

function App() {
  const [enteredCountry, setEnteredCountry] = useState('');
  const [errorFetch, setErrorFetch] = useState(false);
  const [dataCountry, setDataCountry] = useState({});
  const [showCountryCard, setShowCountryCard] = useState(false);

  const title = 'Country search';

  useEffect(() => {
    setShowCountryCard(Object.keys(dataCountry).length === 0 ? false : true);
  }, [dataCountry]);

  return (
    <Card>
        <Header title={title} />
        <InputSearchCountry
          onEnteredCountry={setEnteredCountry}
          enteredCountry={enteredCountry}
          errorFetch={errorFetch}
          onDataCountry={setDataCountry}
          onErrorFetch={setErrorFetch}
        />
        {!errorFetch && (
          <CountryDataCard
            dataCountry={dataCountry}
            showCountryCard={showCountryCard}
            errorFetch={errorFetch}
          />
        )}
    </Card>
  );
}

export default App;
