import React, { useState } from 'react';

function CodeEditor() {


return (
  <div className="CodeMirror cm-s-webflow-material" translate="no">
    <div style={{ overflow: 'hidden', position: 'relative', width: '3px', height: '0px', top: '4px', left: '34px' }}>
      <textarea
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        tabIndex="0"
        style={{ position: 'absolute', bottom: '-1em', padding: '0px', width: '1000px', height: '1em', minHeight: '1em', outline: 'none' }}
      ></textarea>
    </div>
    <div className="CodeMirror-vscrollbar" tabIndex="-1" cm-not-content="true">
      <div style={{ minWidth: '1px', height: '0px' }}></div>
    </div>
    <div className="CodeMirror-hscrollbar" tabIndex="-1" cm-not-content="true">
      <div style={{ height: '100%', minHeight: '1px', width: '0px' }}></div>
    </div>
    <div className="CodeMirror-scrollbar-filler" cm-not-content="true"></div>
    <div className="CodeMirror-gutter-filler" cm-not-content="true"></div>
    <div className="CodeMirror-scroll" tabIndex="-1">
      <div className="CodeMirror-sizer" style={{ marginLeft: '30px', marginBottom: '-10px', borderRightWidth: '40px', minHeight: '24px', minWidth: '26.7969px', paddingRight: '0px', paddingBottom: '0px' }}>
        <div style={{ position: 'relative', top: '0px' }}>
          <div className="CodeMirror-lines" role="presentation">
            <div role="presentation" style={{ position: 'relative', outline: 'none' }}>
              <div className="CodeMirror-measure">
                <pre className="CodeMirror-line-like">x</pre>
              </div>
              <div className="CodeMirror-measure"></div>
              <div style={{ position: 'relative', zIndex: '1' }}>
                <div
                  className="CodeMirror-selected"
                  style={{ position: 'absolute', left: '4px', top: '0px', width: '19.7969px', height: '16px' }}
                ></div>
              </div>
              <div className="CodeMirror-cursors" style=""></div>
              <div className="CodeMirror-code" role="presentation">
                <div style={{ position: 'relative' }}>
                  <div
                    className="CodeMirror-gutter-wrapper"
                    aria-hidden="true"
                    style={{ left: '-30px' }}
                  >
                    <div
                      className="CodeMirror-linenumber CodeMirror
                      Mirror-gutter-elt" style={{ left: '0px', width: '21px' }}>
                      1
                    </div>
                  </div>
                  <pre className=" CodeMirror-line " role="presentation">
                    <span role="presentation" style={{ paddingRight: '0.1px' }}>
                      sds
                    </span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', height: '40px', width: '1px', borderBottom: '0px solid transparent', top: '24px' }}></div>
      <div className="CodeMirror-gutters" style={{ height: '64px', left: '0px' }}>
        <div className="CodeMirror-gutter CodeMirror-linenumbers" style={{ width: '29px' }}></div>
      </div>
    </div>
  </div>
);

}

export default CodeEditor;
