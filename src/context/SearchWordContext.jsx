import { createContext, useContext, useState } from 'react';

const searchWordContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState('');
  const [appliedSearchWord, setAppliedSearchWord] = useState('');

  const applySearch = (word) => {
    setAppliedSearchWord(word);
  };

  return (
    <searchWordContext.Provider value={{ searchWord, setSearchWord, applySearch, appliedSearchWord }}>
      {children}
    </searchWordContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(searchWordContext);
};
