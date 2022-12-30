import React, { useState, useEffect } from 'react';

function Draggable() {
  const [isMoving, setIsMoving] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [initialWidth, setInitialWidth] = useState(0);
  const [initialHeight, setInitialHeight] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);

  const handleMouseDown = (event) => {
    if (event.target.className === 'box') {
      setIsMoving(true);
      setInitialX(event.clientX);
      setInitialY(event.clientY);
      setCurrentX(event.target.offsetLeft);
      setCurrentY(event.target.offsetTop);
    } else if (event.target.className === 'resize-handle') {
      setIsResizing(true);
      setInitialX(event.clientX);
      setInitialY(event.clientY);
      setInitialWidth(event.target.parentElement.offsetWidth);
      setInitialHeight(event.target.parentElement.offsetHeight);
    }
  };

  const handleMouseUp = () => {
    setIsMoving(false);
    setIsResizing(false);
  };

  const handleMouseMove = (event) => {
    if (isMoving) {
      setCurrentX(currentX + event.clientX - initialX);
      setCurrentY(currentY + event.clientY - initialY);
    } else if (isResizing) {
      setCurrentWidth(initialWidth + event.clientX - initialX);
      setCurrentHeight(initialHeight + event.clientY - initialY);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMoving, isResizing, initialX, initialY, initialWidth, initialHeight]);

  return (
    <div className="container" onMouseDown={handleMouseDown}>
      <div
        className="box"
        style={{ left: currentX, top: currentY, width: currentWidth, height: currentHeight }}
      >
        <div className="resize-handle" />
      </div>
    </div>
  );



}

export default Draggable;
