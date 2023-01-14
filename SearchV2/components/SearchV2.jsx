import React, { useState, useEffect, useRef } from 'react';
// import SearchBar from './Components/SearchBar/SearchBar';
// import CodeExtractor from '../../Parser/codeExtractor';
// import WebflowExtractor from '../../Parser/webflowExtractor';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useSearchDispatch, useSearchContext } from './SearchProvider';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import SearchProvider from './SearchProvider';
import Filter from './Filter/Filter';

// const testdata = require('../../testData.json')
// const testCSS = require('../../test.css');



function SearchV2() {



  return (
    <>
      <div style={{ height: '100px' }}></div>

      <div
        style={{
          paddingLeft: '200px',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
          borderBottomLeftRadius: '50px',
          borderBottomRightRadius: '50px',
          overflow: 'none',
          width: '1000px'
        }}>
        <SearchProvider>
          <SearchBar>
            <Filter></Filter>
          </SearchBar>


          <SearchResults ></SearchResults>

        </SearchProvider>
      </div>
      {/* <div>{searchTerm}</div>
      <button onClick={() => { handleSearch() }}>add</button>
      <button onClick={() => { dispatch({ type: 'search', payload: 'hi there' }) }}>add</button> */}
    </>
  )






}


export default SearchV2;