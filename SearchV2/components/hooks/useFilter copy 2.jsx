import { useState } from "react";

export default function useFilter(searchTerm, data) {
  const [results, setResults] = useState("");


  const structure = { searchTerm: searchTerm, category: 'css', occurenceLevel: 3, }







  let filteredData = Object.keys(data).filter(className => {
    searchTerm = searchTerm.toLowerCase();
    className = className.toLowerCase();
    for (let i = 0; i < searchTerm.length; i++) {
      if (className.indexOf(searchTerm[i]) === -1) {
        return false;
      }
    }
    return true;
  }).slice(0, 7);

  return filteredData;
}