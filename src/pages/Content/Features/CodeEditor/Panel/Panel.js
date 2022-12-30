import React, { useRef, useState } from 'react';

import PanelHeader from './components/PanelHeader';
import Resizer from './components/Resizer';

import { Direction } from './components/Resizer/constants';

import './styles.css';

const Panel = ({ children }) => {
  const panelRef = useRef();

  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (event) => {
    setInitialX(event.clientX);
    setInitialY(event.clientY);
  };

  const handleDrag = (clientX, clientY) => {
    const panel = panelRef.current;

    if (!panel) return;


    const { x, y } = panel.getBoundingClientRect();



    const handleResize = (direction, movementX, movementY) => {
      const panel = panelRef.current;
      if (!panel) return;

      const { width, height, x, y } = panel.getBoundingClientRect();


      const { innerWidth, innerHeight } = window;

      if (width > innerWidth) panel.style.width = `${innerWidth}px`;
      if (height > innerHeight) panel.style.height = `${innerHeight}px`;


      const resizeTop = () => {
        panel.style.height = `${height - movementY}px`;
        panel.style.top = `${y + movementY}px`;
      };

      const resizeRight = () => {
        panel.style.width = `${width + movementX}px`;
      };

      const resizeBottom = () => {
        panel.style.height = `${height + movementY}px`;
      };

      const resizeLeft = () => {
        panel.style.width = `${width - movementX}px`;
        panel.style.left = `${x + movementX}px`;
      };

      switch (direction) {
        case Direction.TopLeft:
          resizeTop();
          resizeLeft();
          break;

        case Direction.Top:
          resizeTop();
          break;

        case Direction.TopRight:
          resizeTop();
          resizeRight();
          break;

        case Direction.Right:
          resizeRight();
          break;

        case Direction.BottomRight:
          resizeBottom();
          resizeRight();
          break;

        case Direction.Bottom:
          resizeBottom();
          break;

        case Direction.BottomLeft:
          resizeBottom();
          resizeLeft();
          break;

        case Direction.Left:
          resizeLeft();
          break;

        default:
          break;
      }
    };

    return (
      <div className="panel-css" ref={panelRef}>
        <div className="panel__container-css">
          <Resizer onResize={handleResize} />

          <PanelHeader onDragPanel={handleDrag}
            onMouseDown={handleMouseDown}
          />

          <div className="panel__content-css">
            {children}
          </div>
        </div>
      </div>
    );
  };

}
export default Panel;



