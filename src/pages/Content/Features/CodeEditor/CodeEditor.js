import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import DraggablePanel from "./PanelV2/index"
// import iFrame from "./iFrame";
import Panel from './Panel/Panel'
import Draggable from './Draggable/Draggable'
import DraggableV2 from './DragClass/DraggableV2.js'

function CodeEditor() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />

      </div>
      <div className="pane" style={{ position: 'relative' }}>

        <DraggableV2>

          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="80%"
            height="80%"
          />

        </DraggableV2>



      </div>
    </>
  );
}

export default CodeEditor;
