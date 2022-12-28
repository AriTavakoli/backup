import React, { useState } from 'react';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    const textarea = event.target;

    if (key === 'ArrowUp') {
      // Find the current line
      const currentLine = textarea.value.substring(0, textarea.selectionStart).split('\n').length - 1;
      // Find the position of the beginning of the current line
      const currentLineStart = textarea.value.lastIndexOf('\n', textarea.selectionStart - 1) + 1;
      // Find the position of the beginning of the line above the current line
      const aboveLineStart = textarea.value.lastIndexOf('\n', currentLineStart - 2) + 1;
      // Set the cursor position to the beginning of the line above the current line
      textarea.selectionStart = textarea.selectionEnd = aboveLineStart;
      event.preventDefault();
    } else if (key === 'ArrowDown') {
      // Find the current line
      const currentLine = textarea.value.substring(0, textarea.selectionStart).split('\n').length - 1;
      // Find the position of the end of the current line
      const currentLineEnd = textarea.value.indexOf('\n', textarea.selectionStart);
      // Find the position of the beginning of the line below the current line
      const belowLineStart = currentLineEnd + 1;
      // Set the cursor position to the beginning of the line below the current line
      textarea.selectionStart = textarea.selectionEnd = belowLineStart;
      event.preventDefault();
    }
  };

  const lineNumbers = code.split('\n').map((line, index) => index + 1);

  return (
    <div style={{ display: 'flex', width: '100%'}}>
      <div style={{ textAlign: 'right', paddingRight: '10px', userSelect: 'none', minWidth: '0px',  }}>
        {lineNumbers.map((number) => (
          <div key={number}>{number}</div>
        ))}
      </div>
      <textarea
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={code}
        style={{ flex: 1 , color:'black'}}
        className="code-editor"
      />
    </div>
  );
};

export default CodeEditor;
