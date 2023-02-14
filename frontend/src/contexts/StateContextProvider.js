import React, { createContext, useContext, useState } from 'react';
import { getSearchResults } from '../api/searchApi';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async () => {
    setLoading(true);
    const data = await getSearchResults();
    
    setResults(data.data.data);
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
