import React, { useState, useEffect, useRef } from 'react';

export default function SearchResults({ cssJson, value, onSearch, currentData }) {
  const [currentRow, setCurrentRow] = useState(-1);
  const dropdownRef = useRef(null);


  // TODO : you can initiate the index of the row in the parent component and pass it as a prop to this component. This way I can reset the index to zero on every case.

  useEffect(() => {
    console.log(currentData.length, 'currentData.length');
    // Add event listeners for arrow keys
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setCurrentRow((currentRow + 1) % currentData.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setCurrentRow((currentRow + currentData.length - 1) % currentData.length);
      } else if (event.key === 'Enter') {
        // Get the class name of the current row
        const rows = dropdownRef.current.querySelectorAll('.dropdown-row');
        const className = rows[currentRow].innerText;
        onSearch(className);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentRow, onSearch, currentData]);

  return (
    <div className="dropdown" style={{ zIndex: '499' }} ref={dropdownRef}>
      {cssJson ? (
        <div className="dropdown">
          {currentData.map((className, index) => (
            <div
              onClick={() => onSearch(className)}
              className={`dropdown-row ${index === currentRow ? 'dropdown-row-selected' : ''}`}
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
