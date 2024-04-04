import { useEffect, useState } from "react";

const useCreative = () => {
  const [creatives, setCreatives] = useState([]);
  const [filteredCreatives, setFilteredCreatives] = useState([]);
  const [currentCreatives, setCurrentCreatives] = useState(0);

  useEffect(() => {
    setFilteredCreatives(creatives);
    setCurrentCreatives(creatives.length);
  }, [creatives]);

  const addCreative = (newCreative, totalCreatives) => {
    if (currentCreatives < totalCreatives) {
      setCurrentCreatives((prevCount) => prevCount + 1);
      setCreatives([...creatives, newCreative]);
    }
  };

  const filterCreativesByColor = (selectedColor) => {
    setFilteredCreatives(
      selectedColor
        ? creatives.filter(
            (creative) => creative.selectedColor === selectedColor
          )
        : creatives
    );
  };

  const filterCreativesBySearchTerm = (searchTerm) => {
    const filtered = creatives.filter(
      (creative) =>
        creative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        creative.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCreatives(filtered);
  };

  return {
    filteredCreatives,
    currentCreatives,
    addCreative,
    filterCreativesByColor,
    filterCreativesBySearchTerm,
  };
};

export default useCreative;
