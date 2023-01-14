import { createContext, useContext, useEffect, useReducer, useState } from "react";



const SearchContext = createContext(null);
const SearchDispatchContext = createContext(null);


export default function SearchProvider({ children }) {

  // row index, value, currentData, categories,

  // this will be used to return the search results , will be consumed in a search result component
  const [searchResults, dispatch] = useReducer(searchReducer);
  const [searchTerm, setSearchTerm] = useState('')
  const [currentRowIndex, setCurrentRowIndex] = useState(-1)
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [availableCategories, setAvailableCategories] = useState([
    { id: 1, name: 'ATTACHMENTS' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'HTML' },
    { id: 4, name: 'COMPONENTS' },
  ]);

  const [showSearchResults, setShowSearchResults] = useState(false)


  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    setSearchTerm(searchTerm);
  }


  const toggleCategory = (category) => {
    // Check if the category is in the selected categories list
    const alreadySelected = selectedCategories.some(c => c.id === category.id);

    if (alreadySelected) {
      // If the category is already selected, remove it from the list
      setSelectedCategories(selectedCategories.filter(c => c.id !== category.id));
      // Add the category back to the available categories list
      setAvailableCategories([...availableCategories, category]);
    } else {
      // If the category is not already selected, add it to the list
      setSelectedCategories([...selectedCategories, category]);
      // Remove the category from the available categories list
      setAvailableCategories(availableCategories.filter(c => c.id !== category.id));
    }
  };






  return (
    <SearchContext.Provider value={{ searchTerm, searchResults, selectedCategories, setCurrentRowIndex, currentRowIndex, handleSearch, toggleCategory, availableCategories }} >
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  )
}



export function useSearchDispatch() {
  return useContext(SearchDispatchContext)
}
export function useSearchContext() {
  return useContext(SearchContext)
}

function searchReducer(searchTerm, action) {

  switch (action.type) {

    case 'search': {
      return (
        console.log(action.payload)
      );
    }

    default: {
      throw new Error('whut')
    }



  }



}


// i need search results, search value all to be connected.