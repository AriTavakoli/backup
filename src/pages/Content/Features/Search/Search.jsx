import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import CodeExtractor from '../../Parser/codeExtractor';
import WebflowExtractor from '../../Parser/webflowExtractor';


export default function Search({cssStyleSheet}) {

  const [value, setValue] = useState("");
  const [tab, setTab] = useState("HTML");
  const [css, setCss] = useState('');
  const [cssJson, setCssJson] = useState("");
  const [currentData, setCurrentData] = useState([])
  const [currentRowIndex, setCurrentRowIndex] = useState(-1)

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [availableCategories, setAvailableCategories] = useState([
    { id: 1, name: 'ATTACHMENTS' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'HTML' },
    { id: 4, name: 'COMPONENTS' },
  ]);


  const onChange = (event) => {

    setValue(event.target.value);
    setCurrentRowIndex(-1)

    setCurrentData(Object.keys(cssJson).filter(filterFunction).slice(0, 10))

  };


  function filterFunction (className) {
    const searchTerm = value.toLowerCase();
    console.log(className, "className");
    return (
      className.toLowerCase().includes(searchTerm) &&
      className.toLowerCase() !== searchTerm
    );
  };


  const toggleCategory = (category) => {
    // Check if the category is in the selected categories list
    const alreadySelected = selectedCategories.some(c => c.id === category.id);

    if (alreadySelected) {
      // If the category is already selected, remove it from the list
      setSelectedCategories(selectedCategories.filter(c => c.id !== category.id));
      // Add the category back to the available categories list
      setAvailableCategories([...availableCategories, category]);
    } else {
      // If the category is not already selected, add it to the list
      setSelectedCategories([...selectedCategories, category]);
      // Remove the category from the available categories list
      setAvailableCategories(availableCategories.filter(c => c.id !== category.id));
    }
  };



  const handleClear = () => {
    setValue("");
    setCurrentData([])
    setCurrentRowIndex(-1)

  }


  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    searchForElement(searchTerm);
    setCurrentData([])
    setCurrentRowIndex(-1)
    setValue("")
  };



  const observeGetCss = async () => {
    const codeExtractor = new CodeExtractor();
    let css = await codeExtractor.mutationObserverElementWithSelector('code');
    console.log(css, 'css is here');
    setCssJson(codeExtractor.convertCssToJson(css));
    console.log(codeExtractor.convertCssToJsonV2(css), 'cssJson');
    setCss(css)
    console.log(cssJson, 'cssJson');
  }

  function tabEventLisenter() {
    const webflowExtractor = new WebflowExtractor();

    webflowExtractor.waitForDomElementExportTab('.kit-scrollbar').then((elm) => {
      let tabBar = elm
      console.log(tabBar, 'tabBar');

      let tabButtons = tabBar.children;
      console.log(tabButtons, 'tabButtons');

      for (let i = 0; i < tabButtons.length; i++) {
        if (tabButtons[i].innerHTML === 'HTML' || tabButtons[i].innerText === 'CSS' || tabButtons[i].innerText === 'JS' || tabButtons[i].innerText === 'Assets') {
          tabButtons[i].addEventListener('click', () => {
            setTab(tabButtons[i].innerText)
          })
        }
      }
    });

    return new Promise((resolve, reject) => {
      resolve('tab event Handlers added')
    });
  }




  // TODO: change this so that the function takes in the tab and becomes modular.
  function searchForElement(searchString) {
    // Get all elements on the page
    let rootSearchCodeDocument;

    if (tab === 'HTML') {
      rootSearchCodeDocument = document.querySelectorAll('code')[0]
    }
    if (tab === 'CSS') {
      rootSearchCodeDocument = document.querySelectorAll('code')[1]
    }
    if (tab === 'JS') {
      rootSearchCodeDocument = document.querySelectorAll('code')[2]
    }


    console.log(rootSearchCodeDocument, 'rootSearchElement');
    const kit = rootSearchCodeDocument;

    const elements = kit.querySelectorAll('*');

    // Loop through all elements
    for (let element of elements) {
      // Get the innerHTML of the element
      const innerHTML = element.innerHTML;
      // Check if the innerHTML matches the search string
      if (innerHTML.includes(searchString)) {
        // Return the element if a match is found
        console.log(element, 'element');

        //and node type is span
        if (element.nodeName === 'SPAN') {

          element.style.background = 'linear-gradient(to right, blue, purple, blue)';
          element.scrollIntoView();
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return element;
        }
      }
    }

    // Return null if no matching element is found
    return null;
  }








  useEffect(() => {
    tabEventLisenter().then(() => {
      console.log('tab event Handlers added');
      observeGetCss();
    })
  }, [])

  useEffect(() => {
    console.log(cssJson, 'cssJson');

  }, [cssJson])

  useEffect(() => {
    console.log(tab, 'tab');
  }, [tab]);




  return (
    <>
      <SearchBar
        onClear={handleClear}
        currentData={currentData}
        css={css}
        setCss={setCss}
        cssJson={cssJson}
        onChange={onChange}
        onSearch={onSearch}
        setValue={setValue}
        setCurrentRowIndex={setCurrentRowIndex}
        currentRowIndex={currentRowIndex}
        value={value}
        toggleCategory={toggleCategory}
        selectedCategories={selectedCategories}
        availableCategories={availableCategories}

      >


      </SearchBar>


    </>


  )

}