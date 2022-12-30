import { Draggable } from "./Draggable";
import React, { useRef, useState } from "react";

export default function DraggablePanel() {

  const elements = [
    {
      child: (
        <div className="App">
          <h3>Can be Dragged and a Draggable Handle</h3>
        </div>
      ),
      isHandle: true
    },
    {
      child: (
        <div className="App">
          <h3>Can be Dragged, but not a draggable handle</h3>
        </div>
      ),
      isHandle: false
    },
    {
      child: (
        <div className="App">
          <h3>Can be Dragged and a Draggable Handle</h3>
        </div>
      ),
      isHandle: true
    }
  ];
  return (
    <div>
      <Draggable renderToParent components={elements} />
    </div>
  );

}