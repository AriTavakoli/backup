import React, { useState, useEffect, useRef } from 'react';
import { useSearchDispatch, useSearchContext } from '../SearchProvider';
import SearchIcon from '../assets/icons/SearchIcon';
import ExIcon from '../assets/icons/ExIcon';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './SearchBar.css'

function SearchBar({ children }) {
  const dispatch = useSearchDispatch();
  const { searchTerm, handleSearch, searchResults } = useSearchContext();
  const { selectedCategories, toggleCategory, availableCategories } = useSearchContext();

  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  return (
    <>

      <div>
        <div >
          <div
            className="search-bar-container" >
            <div className="search-bar">
              <div className="search-icon-container">
                <SearchIcon />
              </div>

              <div  className="filter-holder">
                {selectedCategories.map((category) => {
                  return (
                    <div key={category.id} className="filter-button" onClick={() => toggleCategory(category)}>
                      <span>{category.name}</span>
                      <svg onClick={() => toggleCategory(category)} width="12" height="12" style={{ alignItems: 'center' }}>
                        <path fill="white" d="M2 2L10 10M10 2L2 10" stroke="white" stroke-width="2" />
                      </svg>
                    </div>
                  )
                })}
                <input className="search-bar-input" autoFocus="autoFocus" type="text" onChange={(e) => { handleSearch(e.target.value) }} value={searchTerm} placeholder="Find anything..." />
              </div>

              <div className="ex-icon" onClick={() => { }}>
                <ExIcon></ExIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>

  )

}

export default SearchBar;