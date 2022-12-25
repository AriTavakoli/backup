

import React, { useState, useEffect, useRef } from 'react';





export default function Results({ value, onSearch, data }) {
  const useKeyPress = function (targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    React.useEffect(() => {
      document.addEventListener("keydown", downHandler);
      document.addEventListener("keyup", upHandler);

      return () => {
        document.removeEventListener("keydown", downHandler);
        document.removeEventListener("keyup", upHandler);
      };
    });

    return keyPressed;
  };

  const [selected, setSelected] = useState(undefined);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [cursor, setCursor] = useState(-1);
  const [hovered, setHovered] = useState(undefined);


  useEffect(() => {
    if (data.length && downPress) {
      setCursor(prevState =>
        prevState < data.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (data.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);
  useEffect(() => {
    if (data.length && enterPress) {
      setSelected(data[cursor]);
    }
  }, [cursor, enterPress]);
  useEffect(() => {
    if (data.length && hovered) {
      setCursor(data.indexOf(hovered));
    }
  }, [hovered]);


  return (
    <div className="dropdown" >
      {data
        .filter((item) => {
          const searchTerm = value.toLowerCase();
          const fullName = item.full_name.toLowerCase();

          return (
            searchTerm &&
            fullName.startsWith(searchTerm) &&
            fullName !== searchTerm
          );
        })
        .slice(0, 10)
        .map((item, i) => (
          <div
            className={`dropdown-row ${i === cursor ? "dropdown-row-selected" : ""} ${selected === item ? "dropdown-row-selected" : ""}`}
            onClick={() => { setSelected(item); onSearch(item.full_name) }}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(undefined)}
          >
            {item.full_name}
          </div>
        ))}
    </div>
  )

};

