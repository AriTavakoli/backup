import React, { useRef, useEffect } from "react";
import "./ResizeV2.css";

function ResizeV2({element}) {
  const ref = useRef(null);
  const refLeft = useRef(null);

  useEffect(() => {
    const resizeableEle = ref.current;
    const styles = window.getComputedStyle(resizeableEle);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
    let x = 0;
    let y = 0;

    resizeableEle.style.top = "50px";
    resizeableEle.style.left = "50px";

    const maxWidth = element.offSetWidth;

    // Left resize
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width - dx;
      resizeableEle.style.width = `${width}px`;

      if (width > maxWidth) {
        width = maxWidth;
      }
      resizeableEle.style.width = `${width}px`;
      element.style.width = `${width}px`;


    };

    const onMouseUpLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      x = event.clientX;
      resizeableEle.style.right = styles.right;
      resizeableEle.style.left = null;

      // element.style.pointerEvents = "none";


      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // Add mouse down event listener

    const resizerLeft = refLeft.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {

      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
    };
  }, []);

  return (
    <div ref={ref} className="resizeableV2">
      <div ref={refLeft} className="resizerV2 resizer-lV2"></div>
      {/* <div ref={refTop} className="resizerV2 resizer-tV2"></div>
      <div ref={refRight} className="resizerV2 resizer-rV2"></div>
      <div ref={refBottom} className="resizerV2 resizer-bV2"></div> */}
    </div>
  );
}

export default ResizeV2;