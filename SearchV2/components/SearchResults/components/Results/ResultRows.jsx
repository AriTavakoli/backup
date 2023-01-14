import React from 'react'
import { useSearchContext } from '../../../SearchProvider'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './Results.css'

export default function ResultRow({ setCurrentRow, currentRowIndex, searchTerm, index, className }) {

  const [animationParent] = useAutoAnimate()

  return (
    <>
      <div
        ref={animationParent}

        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}

        onClick={() => console.log('searched', currentRowIndex)}
        className={`suggestions-wrapper ${index === currentRowIndex ? 'suggestions-wrapper-selected' : ''}`}
        key={className}
        onMouseEnter={() => setCurrentRow(index)}
        onMouseLeave={() => setCurrentRow(-1)}
        onMouseOver={() => setCurrentRow(index)}
        onMouseOut={() => setCurrentRow(-1)}
      >
        <div className="suggestions">
          <div className="suggestions-text">
            <HighlightedText className={className} searchTerm={searchTerm} />
          </div>
        </div>
        <div className="search-result-sub-wrapper padding-fix">
          <div className="svg a---result-item-sub-icon w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
              <title>subdirectory_arrow_right</title>
              <g fill="none">
                <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" fill="currentColor"></path>
              </g>
            </svg>
          </div>
          <div className="suggestion-bottom-text">a <a href="#">category</a> or #<a href="#" id="hashtag">hashtag</a>
          </div>
        </div>
        <div className='result-item-divider'> </div>
      </div>
   </>

  )
}


const HighlightedText = ({ className, searchTerm }) => {
  const parts = className.split(searchTerm);
  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className="highlight">{searchTerm}</span>
          )}
        </React.Fragment>
      ))}
    </>
  )
}