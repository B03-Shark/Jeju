import useSearchStore from '../zustand/SearchStore';

const useSearch = () => {
  const { searchWord, setSearchWord, appliedSearchWord, setAppliedSearchWord } = useSearchStore();

  const applySearch = (word) => {
    setAppliedSearchWord(word);
  };

  return {
    searchWord,
    setSearchWord,
    appliedSearchWord,
    applySearch
  };
};

export default useSearch;
