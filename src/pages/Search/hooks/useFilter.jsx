import React, { useState, useEffect } from 'react'



//add filter params to this.

export default function useFilter(searchTerm, data) {

  const [results, setResults] = useState();



  let filteredData = data.filter((item) => {
    return item !== 1;
  })


  return filteredData;




}