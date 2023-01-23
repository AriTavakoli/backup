import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';
import CssParser from './Parser/cssParser';
import HtmlParser from './Parser/htmlParser';
import WebflowExtractor from './Parser/webflowExtractor';
import Search from './Features/Search/Search';
import Video from './Features/Pic/components/Video';
import Panel from './Panel/Panel.js';
import htmlFile from './test.html';
import css from './css.txt'
import Draggable from './Draggable/Draggable'
import DraggableV2 from './DragClass/DraggableV2.js'
import axios from 'axios'

const Newtab = () => {


  function createNewWindow(left, top, width, height) {
    chrome.windows.create({
      url: 'popup.html',
      type: "popup",
      tabId: null,
      left: left,
      top: top,
      width: width,
      height: height
    });
  }
  function moveWindowToLeft() {
    chrome.windows.getCurrent(function (currentWindow) {
      chrome.windows.update(currentWindow.id, {
        left: 0,
        top: 0
      });
    });
  }


  const networkRequest = async () => {

    const req = await axios({
      url: 'https://webflow.com/api/sites/aris-stunning-site/queue-export',
      method : 'get'
    }).then((data) => {
      console.log(data, 'data');
    })

  }

  const getStyles = async () => {

    //     getComponent();
    //     let css = await getCSS();
    //     console.log(css, 'css');

    const htmlParser = new HtmlParser(htmlFile);

    const parsed = htmlParser.getAllChildren('modalcontainer');

    const classNames = htmlParser.getClassNames('modalcontainer')

    console.log(htmlParser.printObjectTree(parsed, '', true, true));
    console.log(parsed, 'parsed');


    const cssParser = new CssParser(css);


    console.log(css);





    const cssString = cssParser.createCssString(css, classNames)

    // console.log(cssString, 'cssString');

    // console.log(cssParser.parseCssTree(css, 'modalcontainer'), 'cssString.parseCssTree(\'modalcontainer\')');






    let mediaQueryArr = cssParser.getMediaQueries(css);


    console.log(mediaQueryArr, 'mediaQueryArr');



    let keyFrameArr = cssParser.getKeyFrames(css);

    console.log(keyFrameArr, 'keyFrameArr');

    let animationsArr = cssParser.getAnimations(css);

    console.log(animationsArr, 'animationsArr');

    let elementWithId = cssParser.findElementById(css, 'no');

    console.log(elementWithId, 'elementWithId');

    let elementSelectors = cssParser.getSelectorDeclarations(css, '#bar', true);

    console.log(elementSelectors, 'elementSelectors');



    let elementSelectorsV2 = cssParser.getSelectorDeclarationsV2(css, '.modalcontainer',);

    console.log(elementSelectorsV2, 'elementSelectorsV2');







    let mediaQueryRel = cssParser.extractRelevantClasses(classNames, mediaQueryArr);
    // console.log(mediaQueryRel, 'mediaQueryRel');

    let mediaString = cssParser.createMediaComponent(mediaQueryRel);



    // console.log(mediaString, 'mediaString');


    let finalComponent = cssParser.createCssComponent(css, classNames, mediaQueryRel);




    // console.log(finalComponent, 'finalComponent');





    //     const parser = new Parser(css,html, 'modalcontainer');
    // console.log('already executed');
    //     const parsedHtmlDoc = parser.parseHtml();

    //     console.log(parsedHtmlDoc, 'parsedHtmlDoc');

    //     console.log(parser.getSelector('modalcontainer'), 'selector');






    // getCSS();



  }


  return (

    <>
      <div style={{ height: '200vh' }}>


        <button onClick={() => { createNewWindow(100, 100, 400, 300); }}>Get Elements</button>
        <button onClick={() => { moveWindowToLeft()}}>Move</button>
        <button onClick={() => {  networkRequest()}}>Request</button>
        {/* <Panel />
      <Search> </Search> */}
        {/* <Draggable></Draggable> */}
        {/* <DraggableV2>

        </DraggableV2> */}


      </div>
    </>
  )

};


export default Newtab;
