import React, { useRef, useEffect } from 'react';
import './Resize.css';

function Resize({ element, }) {
  const ref = useRef(null);
  const refRight = useRef(null);

  useEffect(() => {
    const resizeableEle = ref.current;
    const styles = window.getComputedStyle(resizeableEle);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
    let x = 0;
    let y = 0;

    // Get the maximum width allowed for the resizeable element
    // based on the width of the element passed in the element prop
    const maxWidth = element.offsetWidth;

    // Right resize
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx;

      // Check if the new width exceeds the maximum allowed width
      if (width > maxWidth) {
        width = maxWidth;
      }

      resizeableEle.style.width = `${width}px`;
      element.style.width = `${width}px`;
    };

    const onMouseUpRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      x = event.clientX;
      resizeableEle.style.left = styles.left;
      resizeableEle.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Add mouse down event listener
    const resizerRight = refRight.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);

    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
    };
  }, []);

  return (
    <div ref={ref} className="resizeable">
      <div ref={refRight} className="resizer resizer-r"></div>
    </div>
  );
}

export default Resize;
