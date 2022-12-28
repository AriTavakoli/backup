import React, { useState, useEffect } from 'react';

export default function ExpandableMenu({exportWindow, codeWindow, codeBar, codeDoc}) {




  const [isExpanded, setIsExpanded] = useState(false);


  function handleExpand() {
    console.log('clicked');
    setIsExpanded(!isExpanded);
    codeDoc.style.transition = 'height 0.5s ease-in-out, width 0.5s ease-in-out';
    codeDoc.style.height = isExpanded ? '510px' : '800px';
    codeDoc.style.width = isExpanded ? '640px' : '1200px';

    exportWindow.style.transition = 'height 0.5s ease-in-out, width 0.5s ease-in-out';
    exportWindow.style.height = isExpanded ? '510px' : '800px';
    exportWindow.style.width = isExpanded ? '640px' : '1200px';

    codeBar.style.transition = 'height 0.5s ease-in-out, width 0.5s ease-in-out';
    codeBar.style.height = isExpanded ? '' : '611px';



    
    codeWindow.style.transition = 'height 0.5s ease-in-out, width 0.5s ease-in-out';





    console.log(codeWindow.style);
    codeWindow.style.height = isExpanded ? '' : '611px';
    console.log('%cCode window style:', 'color: blue');
    console.log(codeWindow.style);


    // codeDoc.style.transition = 'width 0.5s';
    // codeDoc.style.transitionTimingFunction = 'ease-in-out';
    // codeDoc.style.width = isExpanded ?  '': '800px'

  }



  const ExpandButton = ({ onClick }) => {
    return (
      <button onClick = {handleExpand} className="bem-Button bem-Button-head bem-Button-lighter modkit-full-screen-button" style={{ lineHeight: 1, height: 'inherit', padding: '5px 10px', marginLeft: '8px', position: 'absolute', right: '2.5%', bottom: '5%', transform: 'scaleX(-1)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bem-Svg modkit-minimize modkit-none" aria-hidden="true" focusable="false">
          <polyline points="4 14 10 14 10 20"></polyline>
          <polyline points="20 10 14 10 14 4"></polyline>
          <line x1="14" y1="10" x2="21" y2="3"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bem-Svg modkit-maximize" aria-hidden="true" focusable="false">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      </button>
    );
  };

  return (
    <ExpandButton onClick = {handleExpand} />
  )
}