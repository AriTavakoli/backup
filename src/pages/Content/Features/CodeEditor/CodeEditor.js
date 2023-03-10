import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import DraggablePanel from "./PanelV2/index"
// import iFrame from "./iFrame";
import Panel from './Panel/Panel'
import Draggable from './Draggable/Draggable'
import DraggableV2 from './DragClass/DraggableV2.js'
import Resize from './Resize/Resize'
import ResizeV2 from './ResizeV2/ResizeV2';

function CodeEditor({ element }) {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  const panelRightRef = React.useRef(null);
  const panelRef = React.useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>${css}</style>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [css]);

  return (
    <>
      <div className="pane top-pane">
        {/* <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        /> */}
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </div>






      {/* <Resize></Resize> */}

      {/*
      <div style={{ position: 'relative' }}>
        <DraggableV2>

          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />

        </DraggableV2>
      </div> */}
    </>
  );
}

export default CodeEditor;
