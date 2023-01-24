import React, { useEffect } from 'react';
import { render } from 'react-dom';
import * as ReactDOM from 'react-dom/client';
import CodeEditor from './Features/CodeEditor/CodeEditor';
import ExpandableMenu from './Features/ExpandMenu/ExpandableMenu';
import Resize from './Features/ExpandMenu/Resize';
import Search from './Features/Search/Search';
import { printLine } from './modules/print';
import CodeExtractor from './Parser/codeExtractor';
import WebflowExtractor from './Parser/webflowExtractor';
import axios from 'axios'

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');



printLine("Using the 'printLine' function from the Print Module");

const App = () => {


  let port;


  const fire = () => {

    var iframeStylesheets = document.querySelector('#site-iframe-next').contentDocument.styleSheets[5].cssRules[0].cssRules;
    for (var i = 0; i < iframeStylesheets.length; i++) {
      // console.log(iframeStylesheets[i]);
    }
    return iframeStylesheets;

  }


  const SearchStyleSheet = (className) => {
    const styleSheet = fire();

    className = '.' + className;

    let newClassName = className.replace(/ /g, '-').toLowerCase();

    console.log(className, 'className');

    console.log(newClassName, 'newClassName');


    for (var i = 0; i < styleSheet.length; i++) {
      if (styleSheet[i].selectorText === newClassName) {

        let data = {
          message: 'styleSheet[i].cssText',
          data: styleSheet[i].cssText
        }
        console.log(styleSheet[i].cssText, 'styleSheet[i].selectorText');

        port.postMessage(data);
        console.log('posted');
        return styleSheet[i];
      }
    }

  }


  function classMutationObserver() {
    // Select the node that will be observed for mutations
    const target = document.body;

    // Options for the observer (which mutations to observe)
    const config = { childList: true, subtree: true };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node.querySelector("[data-automation-id='style-rule-token-text']");
              if (element) {
                console.log("New element: ", element);

                SearchStyleSheet(element.innerText);

              }
            }
          });
        }
      });
    });

    // Start observing the target node for configured mutations
    observer.observe(target, config);
  }



  function moveWindowToLeft() {
    chrome.windows.getCurrent(function (currentWindow) {
      chrome.windows.update(currentWindow.id, {
        left: 0,
        top: 0
      });
    });
  }


  const getHtml = () => {
    // Get the iframe element
    const iframe = document.querySelector('#site-iframe-next').contentDocument;
    // Get the body element
    const body = iframe.querySelector('body');
    console.log(body, 'body');

    // Use DOMParser to get html
    const parser = new DOMParser();
    const doc = parser.parseFromString(body.innerHTML, 'text/html');

    // Get all elements in the body
    const elements = doc.querySelectorAll('body *');

    // Remove the data-w-id and data-wf-id attributes from each element
    elements.forEach(element => {
      element.removeAttribute('data-w-id');
      element.removeAttribute('data-wf-id');
    });

    console.log(doc, 'doc');
    console.log(doc.body, 'doc.body');

    // return the doct body
    return doc.body;
  }

  const CreateTab = () => {
    // post message to background.js
    (async () => {
      const response = await chrome.runtime.sendMessage({ message: "createPopup" });
      // do something with response here, not outside the function
      console.log(response);
    })();

  }

  const message = () => {
    (async () => {
      const response = await chrome.runtime.sendMessage({ message: "relay" });
      // do something with response here, not outside the function
      console.log(response);
    })();

  }









  const networkRequest = async () => {
    let session = '';

    const req = await axios({
      url: 'https://webflow.com/api/sites/aris-stunning-site/queue-export',
      method: 'get',
    }).then((data) => {
      session = data.data.exportTaskId;
      return session;
    });

    while (true) {
      let status = '';
      const req2 = await axios({
        url: `https://webflow.com/api/site/aris-stunning-site/tasks/${session}`,
        method: 'get',
      }).then((data) => {
        status = data.data.status.status;
        console.log(`Task status: ${JSON.stringify(data.data.status)}`);
        console.log(data, 'ksjdfkjsdf');
      });
      if (status === 'finished') break;
      await new Promise(resolve => setTimeout(resolve, 1300));
    }
  }



  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h1>Export code</h1>
      {/* <Panel></Panel>
      <DraggablePanel></DraggablePanel> */}
      <button onClick={() => { networkRequest() }}>Request</button>
      <button onClick={() => { fire() }}>fire</button>
      {/* <button onClick={() => { createNewWindow() }}>SearchStyleSheet</button> */}
      <button onClick={() => { getHtml() }}>get html</button>
      <button onClick={() => { classMutationObserver() }}>MutationObserver</button>
      <button onClick={() => { CreateTab() }}>Create Tab</button>
      <button onClick={() => { message() }}>Message</button>
      {/* <button onClick={() => { exporter(); getComponent(); }}>Get Elements</button> */}
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


