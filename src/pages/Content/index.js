import { printLine } from './modules/print';
import html from './test.html'
import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';

import HtmlParser from './Parser/htmlParser';
import CssParser from './Parser/cssParser';
import WebflowExtractor from './Parser/webflowExtractor';
import { useEffect } from 'react';
import SearchFeature from './Parser/search/searchcomp';
import { render } from 'react-dom';
import logo from '../../assets/img/logo.svg';
import SearchV2 from './Parser/search/searchv2';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');



printLine("Using the 'printLine' function from the Print Module");

const App = () => {

  const [tab, setTab] = useState('HTML');



  const getStyles = async () => {

    //     getComponent();
    //     let css = await getCSS();
    //     console.log(css, 'css');


    const parser = new WebflowExtractor();

    const exportButton = document.querySelector('.bem-TopBar_Body_Button.bem-TopBar_Body_ExportButton')

    exportButton.addEventListener('click', () => {
      console.log('clicked')

      setTimeout(() => {

        let tabBar = document.querySelectorAll('.kit-scrollbar')[1].children[0]

        let tabButtons = tabBar.children;
        console.log(tabButtons, 'tabButtons');


        console.log(tabBar, 'element');

        // create a div element
        const div = document.createElement('div');

        tabBar.appendChild(div);


        render(<SearchFeature currentTab={tab} />, div)

      }, 200)

    })


    parser.waitForElementInIframe('drop-down');



    parser.waitForDomElement('[data-automation-id="panel-header"]').then((elm) => {
      console.log(elm, 'elm');
    })










    // buttonElement.setAttribute('style', `
    //   margin-top: -1px;
    //   display: block;
    //   width: 35px;
    //   position: relative;
    //   padding-top: 11px;
    //   padding-bottom: 11px;
    //   cursor: default;
    // `);


    //     const parser = new Parser(css,html, 'modalcontainer');
    // console.log('already executed');
    //     const parsedHtmlDoc = parser.parseHtml();

    //     console.log(parsedHtmlDoc, 'parsedHtmlDoc');

    //     console.log(parser.getSelector('modalcontainer'), 'selector');






    // getCSS();



  }

  const ShareLargeIcon = () => {
    return (
      <button
        data-automation-id="symbol-panel-drop-down-edit"
        type="button"
        sizing="small"
        structure="ghost"
        tabindex="0"
        style={{
          border: 'none',
          outline: '0px',
          cursor: 'default',
          userSelect: 'none',
          padding: '0px',
          fontFamily: 'inherit',
          fontSize: '11px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '24px',
          borderRadius: '2px',
          color: 'rgb(171, 171, 171)',
          background: 'transparent',
          boxSizing: 'border-box',
          boxShadow: 'none',
          alignSelf: 'center',
          width: '24px'
        }}
      >
        <div className="--styled-lihrRi wf-1mrza4x">
          <svg
            data-icon="ShareLarge"
            aria-hidden="true"
            focusable="false"
            width="14"
            height="14"
            viewBox="0 0 20 20"
            className="bem-Svg"
          >
            <path
              fill="currentColor"
              d="M14 11V7.33h-2a3 3 0 00-3 3v3H7v-3a4.998 4.998 0 015-5h2V2l6 4.5-6 4.5z"
            />
            <path
              fill="currentColor"
              d="M7.108 4H2a1 1 0 00-1 1v12a1 1 0 001 1h15a1 1 0 001-1v-5.25l-2 1.5V16H3V6h2.272a8.044 8.044 0 011.836-2z"
            />
          </svg>
        </div>
      </button>
    );
  };
  const getComponent = () => {

    const componentParser = new WebflowExtractor();

    const componentButton = document.querySelector('[data-automation-id="left-sidebar-symbols-button"]')

    componentButton.addEventListener('click', () => {
      setTimeout(() => {
        let componenTabChildren = document.getElementsByClassName('--styled-kDKPFq wf-kih0vo')[0].children
        console.log(componenTabChildren, 'componenTabChildren');


        for (let i = 0; i < componenTabChildren.length; i++) {

          console.log();

          let componentTab = componenTabChildren[i].children[0].children[0]
          console.log(componentTab, 'componentTab');

          const div = document.createElement('div');
          div.addEventListener('click', (e) => {
            console.log('clicked');

            //stop the event from bubbling up
            e.stopPropagation();

          })
          componentTab.appendChild(div);
          render(<ShareLargeIcon />, div)
        }
      }, 200)



    })

  }

  useEffect(() => {

  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h1>Export code</h1>
      <button onClick={() => { getStyles(); getComponent(); }}>Get Elements</button>
    </div>
  );
};



const body = document.querySelector('body')
const app = document.createElement('div')


app.id = 'react-root'

if (body) {
  body.prepend(app)
}

const container = document.getElementById('react-root');
const root = ReactDOM.createRoot(container);

root.render(<App />)






// add react to page


