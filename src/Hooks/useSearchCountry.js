import React, { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH ERROR':
      return {
        error: 'Something went wrong, Country not found',
        post: {},
        loading: false,
      };
    case 'FETCH SUCCES':
      return {
        error: '',
        post: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const useSearchCountry = ({ country }) => {
  const [state, dispatch] = useReducer(reducer, {
    error: '',
    post: {},
    loading: true,
  });

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${country}`
        );
        if (!response.ok) {
          dispatch({ type: 'FETCH ERROR' });
          return;
        }
          const data = await response.json();
          console.log(data);
          dispatch({ type: 'FETCH SUCCES', payload: data });
      } catch (err) {
        console.error(err);
      }
    };

    fetchHandler();
  }, []);

  console.log(state);

  return state;
};

export default useSearchCountry;
