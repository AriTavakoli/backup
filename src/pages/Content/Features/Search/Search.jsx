import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import CodeExtractor from '../../Parser/codeExtractor';
import WebflowExtractor from '../../Parser/webflowExtractor';


export default function Search() {


  const [value, setValue] = useState("");
  const [tab, setTab] = useState("HTML");
  const [css, setCss] = useState('');
  const [cssJson, setCssJson] = useState('');
  const [currentData, setCurrentData] = useState([])



  const onChange = (event) => {

    setValue(event.target.value);

    setCurrentData(Object.keys(cssJson).filter((className) => {
      const searchTerm = event.target.value.toLowerCase();
      return (
        searchTerm &&
        className.toLowerCase().startsWith(searchTerm) &&
        className.toLowerCase() !== searchTerm
      );
    }).slice(0, 10))
  };


  const handleClear = () => {
    setValue("");
    setCurrentData([])

  }


  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    searchForElement(searchTerm);
    setCurrentData([])
  };

  const observeGetCss = async () => {
    const codeExtractor = new CodeExtractor();
    let css = await codeExtractor.extractCss();
    setCssJson(codeExtractor.convertCssToJson(css));
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
    console.log(tab, 'tab');
  }, [tab]);




  return (
    <>
      <SearchBar onClear={handleClear} currentData={currentData} css={css} setCss={setCss} cssJson={cssJson} onChange={onChange} onSearch={onSearch} setValue={setValue} value={value}>
      </SearchBar>


    </>


  )

}