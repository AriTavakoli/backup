import { useSearchDispatch, useSearchContext } from './SearchProvider';
import React, { useState, useEffect, useRef } from 'react';
import useFilter from './hooks/useFilter';

export default function SearchResults() {

  const filteredResults = useFilter(1, [1, 2, 3, 4, 5])
  const [currentRow, setCurrentRow] = useState(-1);

  const dropdownRef = useRef(null);

  const { searchTerm, handleSearch, searchResults, currentRowIndex, setCurrentRowIndex, } = useSearchContext();


  useEffect(() => {
    console.log(filteredResults.length, 'filteredResults.length');
    // Add event listeners for arrow keys
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setCurrentRowIndex((currentRowIndex + 1) % filteredResults.length);
          break;
        case 'ArrowUp':
          event.preventDefault();
          setCurrentRowIndex((currentRowIndex + filteredResults.length - 1) % filteredResults.length);
          break;
        case 'Enter':
          // Get the class name of the current row
          const rows = dropdownRef.current.querySelectorAll('.dropdown-row');
          const className = rows[currentRowIndex].innerText;
          // onSearch(className);
          break;
        default: break;

      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [filteredResults, currentRowIndex]);



  return (
    <div>


      <div className="dropdown" style={{ zIndex: '499' }} ref={dropdownRef}>

        <div className="dropdown">
          {filteredResults.map((className, index) => (
            <div
              onClick={() => console.log('searched')}
              className={`dropdown-row ${index === currentRowIndex ? 'dropdown-row-selected' : ''}`}
              key={className}
              onMouseEnter={() => setCurrentRow(index)}
              onMouseLeave={() => setCurrentRow(-1)}
              onMouseOver={() => setCurrentRow(index)}
              onMouseOut={() => setCurrentRow(-1)}

            >
              <div className="dropdown-item">{className}</div>
            </div>
          ))}
        </div>

      </div>
      {searchTerm}
      {filteredResults}




    </div>
  )


}