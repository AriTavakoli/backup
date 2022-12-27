import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';
import './Filter.css';
import SearchResults from './SearchResults';
import Filter from './Filter';

export default function SearchBar({ onSearch, onClear, currentData, onChange, setValue, value, css, setCss, cssJson, setCurrentRowIndex, currentRowIndex, toggleCategory, setAvailableCategories, setSelectedCategories, selectedCategories, availableCategories, setCurrentData, setCssJson, setTab, tab}) {


  const [showResults, setShowResults] = useState(false)



  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setShowResults(true);
    }
  }

  return (
    <div style={{ position: 'absolute', zIndex: '500', right: '5%', width: '400px' }}>
      <div style={{ width: '700px', maxWidth: '600px', display: 'inline' }}>
        <div style={{ display: 'flex', boxSizing: 'border-box', borderStyle: 'none', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 4px 0px, rgba(0, 0, 0, 0.24) 0px 4px 16px 0px', borderWidth: '1px', borderColor: 'rgb(33, 33, 33)', overflow: 'visible' }}>
          <div style={{ backgroundColor: 'rgb(64, 64, 64)', flex: '1 1 0%', }}>
            <div id='inputmain'
              style={{
                borderStyle: 'initial',
                alignItems: 'center',
                background: 'rgb(33, 33, 33)',
                padding: '0px',
                borderWidth: '0px',
                borderColor: 'initial',
                display: 'flex',
                position: 'relative',
                flexShrink: '0'
              }}>
              <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px', width: '24px', left: '12px' }}>
                <svg data-icon="SearchMedium14" aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 14 14" className="bem-Svg" style={{ display: 'block', position: 'static', width: '14', height: '14' }}>
                  <path fill="currentColor" d="M15.53 14.47l-3.795-3.795A5.965 5.965 0 0013 7a6 6 0 10-6 6 5.97 5.97 0 003.675-1.264l3.795 3.795 1.06-1.06v-.001zM7 11.5c-2.48 0-4.5-2.02-4.5-4.5S4.52 2.5 7 2.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"></path>
                </svg>
              </div>
              <input autoFocus="autoFocus" type="text" value={value} onChange={onChange}
                placeholder="Find anything..." style={{ borderStyle: 'none', lineHeight: '16px', padding: '0px 48px', height: '30px', fontSize: '14px', borderRadius: '20px', color: 'rgb(235, 235, 235)', background: 'rgb(33, 33, 33)', borderWidth: '1px', borderColor: 'rgb(33, 33, 33)', borderRadius: '20px', boxSizing: 'border-box', display: 'block', width: '100%', fontFamily: 'inherit', outline: '0px' }} />
              <div onClick={() => { onClear() }} style={{ position: 'absolute', zIndex: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px', width: '24px', right: '12px', color: 'rgb(117, 117, 117)' }}>
                <svg data-icon="SettingsMedium" aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" className="bem-Svg">
                  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" d="M2 11l9-9M2 2l9 9"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="dropdown-container">

        <Filter
          cssJson={cssJson}
          setCss={setCss}
          css={css}
          toggleCategory = {toggleCategory}
          setAvailableCategories = {setAvailableCategories}
          setSelectedCategories = {setSelectedCategories}
          selectedCategories = {selectedCategories}
          availableCategories = {availableCategories}

           />

        <SearchResults
          currentRowIndex={currentRowIndex}
          setCurrentRowIndex={setCurrentRowIndex}
          handleKeyDown={handleKeyDown}
          currentData={currentData}
          cssJson={cssJson}
          onSearch={onSearch}
          value={value} />




      </div>


    </div >
  );
}
