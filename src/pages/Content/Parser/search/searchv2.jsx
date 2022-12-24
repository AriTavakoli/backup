import React, { useState, useRef } from 'react';

function SearchV2() {



  const inputRef = useRef(null);

  console.log("search feature");

  const [value, setValue] = useState("");

  const onInput = (event) => {
    inputRef.current.focus();
    setValue(event.target.value);

    //maintain focus on form input


  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };


  const Finder = () => {
    return (
      <form>
        <input
          type="text"
          value={value}
          onChange={onInput}
          ref={inputRef}
        />
        <button type="button" onClick={() => onSearch(value)}>

          Search
        </button>

      </form>
    );
  };


  return (
    <>
      <Finder />


    </>
  );
}

export default SearchV2;


