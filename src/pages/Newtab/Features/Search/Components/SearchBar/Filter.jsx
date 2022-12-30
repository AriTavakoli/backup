import React, { useState, useEffect } from 'react';

const Filter = ({selectedCategories,setSelectedCategories,availableCategories,setAvailableCategories, toggleCategory}) => {
  // Define the available categories and the selected categories as state variables
  // const [availableCategories, setAvailableCategories] = useState([
  //   { id: 1, name: 'ATTACHMENTS' },
  //   { id: 2, name: 'CSS' },
  //   { id: 3, name: 'HTML' },
  //   { id: 4, name: 'COMPONENTS' },
  // ]);
  // const [selectedCategories, setSelectedCategories] = useState([]);

  // Define a method for adding or removing a category


  return (
    <div className="filter-container">
      {/* Display the selected categories */}
      <div className="filter-selected">
        {selectedCategories.map(category => (
          <div key={category.id} className="filter-button" onClick={() => toggleCategory(category)}> 



            <span>{category.name}</span>
            {/* When the user clicks on the "x" icon, remove the category from the selected categories list */}

            <svg onClick={() => toggleCategory(category)} width="12" height="12" style={{ alignItems: 'center' }}>
              <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" stroke-width="2" />
            </svg>


          </div>
        ))}
      </div>
      {/* Display the available categories */}
      <div className="horizontal-divider"> </div>
      <div className="filter-available">
        {availableCategories.map(category => (
          <div key={category.id} className="filter-button" onClick={() => toggleCategory(category)}>
            <span>{category.name}</span>
            {/* When the user clicks on the "+" icon, add the category to the selected categories list */}


            <svg onClick={() => toggleCategory(category)} width="12" height="12" style={{ alignItems: 'center' }}>
              <path d="M6 2V10M2 6H10" stroke="currentColor" stroke-width="2" />
            </svg>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
