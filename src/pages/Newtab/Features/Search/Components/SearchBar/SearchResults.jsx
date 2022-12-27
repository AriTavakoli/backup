import React, { useState, useEffect, useRef } from 'react';

export default function SearchResults({ cssJson, value, onSearch, currentData, currentRowIndex, setCurrentRowIndex }) {
  const [currentRow, setCurrentRow] = useState(-1);
  const dropdownRef = useRef(null);


  // TODO : you can initiate the index of the row in the parent component and pass it as a prop to this component. This way I can reset the index to zero on every case.

  useEffect(() => {
    console.log(currentData.length, 'currentData.length');
    // Add event listeners for arrow keys
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setCurrentRowIndex((currentRowIndex + 1) % currentData.length);
          break;
        case 'ArrowUp':
          event.preventDefault();
          setCurrentRowIndex((currentRowIndex + currentData.length - 1) % currentData.length);
          break;
        case 'Enter':
          // Get the class name of the current row
          const rows = dropdownRef.current.querySelectorAll('.dropdown-row');
          const className = rows[currentRowIndex].innerText;
          onSearch(className);
          break;
        default: break;

      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onSearch, currentData, currentRowIndex]);

  return (
    <div className="dropdown" style={{ zIndex: '499' }} ref={dropdownRef}>
      {cssJson ? (
        <div className="dropdown">
          {currentData.map((className, index) => (
            <div
              onClick={() => onSearch(className)}
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
      ) : null}
    </div>
  );
}
