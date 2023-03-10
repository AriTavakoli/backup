import React, { useRef, useState } from "react";
import "./draggable.css";

export const Draggable = (props) => {
  const divRef = useRef(null);
  const [relativePos, setRelativePos] = useState({
    x: 10,
    y: 10
  });

  const onMouseDown = (event) => {
    let prevX = event.clientX;
    let prevY = event.clientY;

    const mouseMove = (moveEvent) => {
      const { left, top } = divRef.current.getBoundingClientRect();
      const newX = prevX - moveEvent.clientX;
      const newY = prevY - moveEvent.clientY;

      prevX = moveEvent.clientX;
      prevY = moveEvent.clientY;

      setRelativePos({ x: left - newX, y: top - newY });
    };

    const mouseUp = () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  const renderChildComponents = ({ components = [] }) => {
    return components.map(({ isHandle, child }) => {
      const draggableClass = isHandle
        ? "dxc-draggable-handle"
        : "dxc-draggable-static";
      const onMouseDownHandle = (event) => {
        if (!isHandle) {
          event.stopPropagation();
        }
      };
      return (
        <div className={draggableClass} onMouseDown={onMouseDownHandle}>
          {child}
        </div>
      );
    });
  };

  return (
    <div
      className="dxc-draggable-wrapper"
      ref={divRef}
      onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        left: relativePos.x + "px",
        top: relativePos.y + "px",
        border: "2px solid red"
      }}
    >
      {renderChildComponents(props)}
    </div>
  );
};
