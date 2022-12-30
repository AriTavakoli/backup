import React, { useRef, useEffect, useState } from "react";
import "./Draggable.css";

function Draggable() {
  const ref = useRef(null);

  const handleMouseDown = (event) => {
    ref.current.style.position = 'absolute'
    const div = ref.current;


    let shiftX = event.clientX - div.getBoundingClientRect().left;
    let shiftY = event.clientY - div.getBoundingClientRect().top;

    console.log(div.getBoundingClientRect().left, event.clientX, 'div.getBoundingClientRect().left');
    console.log(div.getBoundingClientRect().top, event.clientY, 'div.getBoundingClientRect().top');



    // Create elements to visualize the shiftY, getBoundingClientRect().left, and getBoundingClientRect().top values
    const lineX = document.createElement('div');
    lineX.style.position = 'absolute';
    lineX.style.left = event.clientX + 'px';
    lineX.style.top = '0px';
    lineX.style.height = '100%';
    lineX.style.width = '1px';
    lineX.style.backgroundColor = 'red';
    document.body.appendChild(lineX);

    // Label the lineX element
    const labelX = document.createElement('div');
    labelX.innerText = 'shiftX';
    labelX.style.position = 'absolute';
    labelX.style.left = event.clientX + 'px';
    labelX.style.top = '-20px';
    labelX.style.color = 'red';
    document.body.appendChild(labelX);

    const lineY = document.createElement('div');
    lineY.style.position = 'absolute';
    lineY.style.left = '0px';
    lineY.style.top = event.clientY + 'px';
    lineY.style.width = '100%';
    lineY.style.height = '1px';
    lineY.style.backgroundColor = 'red';
    document.body.appendChild(lineY);

    // Label the lineY element
    const labelY = document.createElement('div');
    labelY.innerText = 'shiftY';
    labelY.style.position = 'absolute';
    labelY.style.left = '-50px';
    labelY.style.top = event.clientY + 'px';
    labelY.style.color = 'red';
    document.body.appendChild(labelY);

    const lineLeft = document.createElement('div');
    lineLeft.style.position = 'absolute';
    lineLeft.style.left = div.getBoundingClientRect().left + 'px';
    lineLeft.style.top = '0px';
    lineLeft.style.height = '100%';
    lineLeft.style.width = '1px';
    lineLeft.style.backgroundColor = 'green';
    document.body.appendChild(lineLeft);

    // Label the lineLeft element
    const labelLeft = document.createElement('div');
    labelLeft.innerText = 'left';
    labelLeft.style.position = 'absolute';
    labelLeft.style.left = div.getBoundingClientRect().left + 'px';
    labelLeft.style.top = '-20px';
    labelLeft.style.color = 'green';
    document.body.appendChild(labelLeft);

    const lineTop = document.createElement('div');
    lineTop.style.position = 'absolute';
    lineTop.style.left = '0px';
    lineTop.style.top = div.getBoundingClientRect().top + 'px';
    lineTop.style.width = '100%';
    lineTop.style.height = '1px';
    lineTop.style.backgroundColor = 'green';
    document.body.appendChild(lineTop);

    // Label the lineTop element
    const labelTop = document.createElement('div');
    labelTop.innerText = 'top';
    labelTop.style.position = 'absolute';
    labelTop.style.left = '-50px';
    labelTop.style.top = div.getBoundingClientRect().top + 'px';
    labelTop.style.color = 'green';
    document.body.appendChild(labelTop);

    function moveAt(pageX, pageY) {
      div.style.left = pageX - shiftX + 'px';
      div.style.top = pageY - shiftY + 'px';
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove)

    div.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove)
      div.onmouseup = null;
    }

    div.ondragstart = function () {
      return false;
    };
  }

  return (
    <div
      ref={ref}
      style={{ width: "100px", borderRadius: '60px', height: "100px", backgroundColor: "red" }}
      onMouseDown={handleMouseDown}
    ></div >
  );
}

export default Draggable;

