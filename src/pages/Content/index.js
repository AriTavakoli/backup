import React from 'react';
import { render } from 'react-dom';
import * as ReactDOM from 'react-dom/client';
import CodeEditor from './Features/CodeEditor/CodeEditor';
import ExpandableMenu from './Features/ExpandMenu/ExpandableMenu';
import Resize from './Features/ExpandMenu/Resize';
import Search from './Features/Search/Search';
import { printLine } from './modules/print';
import CodeExtractor from './Parser/codeExtractor';
import WebflowExtractor from './Parser/webflowExtractor';


console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');



printLine("Using the 'printLine' function from the Print Module");

const App = () => {

  function exportInit(css, html) {

    let tabBar = document.querySelectorAll('.kit-scrollbar')[1].children[0]
    let codeBar = document.querySelectorAll('.kit-scrollbar')[1].children[1] // ? width and heigh are adjustable for codespaces
    let codeDocKitScrollBar = document.querySelectorAll('.kit-scrollbar')[1]
    let codeWindow = document.querySelectorAll('.kit-scrollbar')[1].children[1].children[1]
    let exportWindow = document.getElementsByClassName('--styled-hAngBs wf-16d2cwq')[0].children[0].children[0].children[0]
    let kitWithArrows = codeBar.children[0];

    console.log(codeDocKitScrollBar, 'codeDocKitScrollBar');
    console.log(kitWithArrows, 'kitWithArrows');
    console.log(codeBar, 'codebar');
    console.log(codeWindow, 'codeWindow');
    console.log(exportWindow, 'exportWindow');

    codeBar.style.display = 'flex'
    codeDocKitScrollBar.style.height = '509px'
    kitWithArrows.children[0].style.display = 'flex';
    // kitWithArrows.style.maxWidth = 'fit-content'
    // kitWithArrows.style.maxWidth = 'fit-content'
    // kitWithArrows.style.position = 'relative'

    // create a div element
    const searchBarDiv = document.createElement('div');
    const expandButtonDiv = document.createElement('div');
    const resizerDiv = document.createElement('div');
    const codeMirrorDiv = document.createElement('div');


    resizerDiv.style.display = 'flex';
    codeMirrorDiv.style.display = 'flex';
    codeMirrorDiv.style.flexGrow = '1';
    codeMirrorDiv.style.flexShrink = '1';
    codeMirrorDiv.style.flexBasis = '0%';
    codeMirrorDiv.style.minWidth = '0px';



    tabBar.appendChild(searchBarDiv);
    codeBar.appendChild(expandButtonDiv);
    kitWithArrows.prepend(resizerDiv);
    codeBar.appendChild(codeMirrorDiv);


    render(<Search cssStyleSheet = {css} />, searchBarDiv)

    render(
      <ExpandableMenu
        codeWindow={codeWindow}
        codeBar={codeBar}
        codeDoc={codeDocKitScrollBar}
        exportWindow={exportWindow}
      />,
      expandButtonDiv
    )

    render(<Resize element={kitWithArrows} />, resizerDiv)

    render(<CodeEditor />, codeMirrorDiv)







  }



  // !!init function


  async function exportInitListener() {
    const exportButton = document.querySelector('.bem-TopBar_Body_Button.bem-TopBar_Body_ExportButton')



    exportButton.addEventListener('click', async () => {
      console.log('clicked')


      const codeExtractor = new CodeExtractor();
      const cssStyleSheet = await codeExtractor.mutationObserverElementWithSelector('code')

      console.log(cssStyleSheet, 'init console.log();');

      // logic of the event listener;
      exportInit(cssStyleSheet)



    })


  }


  const exporter = async () => {

    exportInitListener().then(() => {
      console.log('addingTab event listener');
      console.log('addedTab event listener');
    })

  }


  const getStyles = async () => {

    //     getComponent();
    //     let css = await getCSS();
    //     console.log(css, 'css');


    const parser = new WebflowExtractor();


    // adds event listener to export button and Renders search bar




    parser.waitForElementInIframe('drop-down');



    parser.waitForDomElement('[data-automation-id="panel-header"]').then((elm) => {
      console.log(elm, 'elm');
    })




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


  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h1>Export code</h1>
      {/* <Panel></Panel>
      <DraggablePanel></DraggablePanel> */}
      <button onClick={() => { exporter(); getComponent(); }}>Get Elements</button>
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


