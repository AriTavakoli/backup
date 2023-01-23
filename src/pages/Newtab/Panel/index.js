import React from 'react';
import usePortal from 'react-useportal';

import Panel from './Panel';

const PanelPortal = (props) => {
  const { Portal } = usePortal({
    bindTo: document.getElementById('panel-portal'),
  });

  return (
    <Portal>
      <Panel {...props} >
        <div stlye = {{width: '200px', height: '200px', backgroundColor: 'black'}}>sdsds</div>
      </Panel>
    </Portal>
  )
};

export default PanelPortal;



