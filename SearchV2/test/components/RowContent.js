import React from "react";
import "./rowContent.css";
function RowContent() {
  return (
    <div className="result-row">
      <RowContentContainer />
    </div>
  );
}


function RowContentContainer() {
  return (
    <div className="row-content-container">
      <h1 className="title">
        You can search through item name
      </h1>
      <div className="sub-row">
        <div className="arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
            <title>subdirectory_arrow_right</title>
            <g fill="none">
              <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" fill="currentColor"></path>
            </g>
          </svg>
        </div>


        <p className="you-can-search-through-item-name">
          You can search through item name
        </p>
      </div>
    </div>
  );
}

export default RowContent;