import { useSearchDispatch, useSearchContext } from '../SearchProvider';
import React, { useState, useEffect, useRef } from 'react';
import useFilter from '../hooks/useFilter';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ResultRow from './components/Results/ResultRows';
import SkeletonRow from './components/Loading/SkeletonRow';
import NoResults from './components/EmptyResults/NoResults';
import ResultLength from './components/Info/ResultLength';
import useKeyboardNavigation from '../hooks/useKeyboardNavigation';
import useFilterV2 from '../hooks/useFilterV2';
import DropDown from './components/DropDownRow/DropDown';
import useTimeout from '../hooks/useTimout';
const data = require('../test.json')


export default function SearchResults() {
  const { searchTerm, handleSearch, searchResults, currentRowIndex, setCurrentRowIndex, } = useSearchContext();

  const filteredResults = useFilter(searchTerm, data)

  const [animationParent] = useAutoAnimate()

  const dropdownRef = useRef(null);


  useKeyboardNavigation(filteredResults, currentRowIndex, setCurrentRowIndex, dropdownRef)

  const loading = useTimeout(searchTerm)

  const resultLength = filteredResults.length

  // if (loading) {
  //   return (
  //     <DropDown dropdownRef={dropdownRef}>
  //       <SkeletonRow count={10} />
  //     </DropDown>
  //   )
  // }

  if ((filteredResults.length === 0 || Object.keys(filteredResults).length === 0) && !loading) {
    return (
      <DropDown dropdownRef={dropdownRef}>
        <NoResults />
      </DropDown>
    )
  }

  // if (searchTerm === '') {
  //   return (
  //     <DropDown dropdownRef={dropdownRef}>
  //       <NoResults />
  //     </DropDown>
  //   )
  // }

  const results = Object.keys(filteredResults).slice(0, 7).map((className, index) => {
    return (
      loading ? <SkeletonRow /> : <ResultRow
        index={index}
        currentRowIndex={currentRowIndex}
        setCurrentRow={setCurrentRowIndex}
        className={className}
        dropdownRef={dropdownRef}
        searchTerm={searchTerm}
        ref={animationParent}
        key={index}
      ></ResultRow>

    )
  }
  )

  return (
    <>
      <div className="dropdown" ref={animationParent}>
        {results}
        <ResultLength length={resultLength}></ResultLength>
      </div>



    </>
  )


}