import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';
import CssParser from './Parser/cssParser';
import HtmlParser from './Parser/htmlParser';
import WebflowExtractor from './Parser/webflowExtractor';
import Search from './Features/Search/Search';

import htmlFile from './test.html';
import css from './css.txt'

const Newtab = () => {



  const getStyles = async () => {

    //     getComponent();
    //     let css = await getCSS();
    //     console.log(css, 'css');

    const htmlParser = new HtmlParser(htmlFile);

    let parsed = htmlParser.getAllChildren('modalcontainer');

    let classNames = htmlParser.getClassNames('modalcontainer')

    console.log(parsed, 'parsed');


    const cssParser = new CssParser(css);





    let cssString = cssParser.createCssString(css, classNames)

    console.log(cssString, 'cssString');

    console.log(cssParser.parseCssTree(css, 'modalcontainer'), 'cssString.parseCssTree(\'modalcontainer\')');






    let mediaQueryArr = cssParser.getMediaQueries(css);


    console.log(mediaQueryArr, 'mediaQueryArr');


    let mediaQueryRel = cssParser.extractRelevantClasses(classNames, mediaQueryArr);
    console.log(mediaQueryRel, 'mediaQueryRel');

    let mediaString = cssParser.createMediaComponent(mediaQueryRel);

    console.log(mediaString, 'mediaString');


    let finalComponent = cssParser.createCssComponent(css, classNames, mediaQueryRel);




    console.log(finalComponent, 'finalComponent');





    //     const parser = new Parser(css,html, 'modalcontainer');
    // console.log('already executed');
    //     const parsedHtmlDoc = parser.parseHtml();

    //     console.log(parsedHtmlDoc, 'parsedHtmlDoc');

    //     console.log(parser.getSelector('modalcontainer'), 'selector');






    // getCSS();



  }


  return (

    <>
      <button onClick={() => { getStyles() }}>Get Elements</button>

      <Search> </Search>
    </>
  )

};


export default Newtab;
