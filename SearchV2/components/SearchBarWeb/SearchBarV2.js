import '../../aris-stunning-site.webflow.css';


export default function SearchBarV2() {

  return (
    <div className="search">
      <form action="/search" className="search-form w-form">
        <input type="search" data-tippy-duration="0" className="search-input jetboost-list-search-input-153x w-input" autocomplete="off" maxlength="150" name="query" data-tippy-content="Try searching: &quot;&lt;strong&gt;Example&lt;/strong&gt;&quot;" placeholder="Search collection items, category or #hashtag" data-w-id="6775d597-59f5-51c9-c3cd-6208d3cfc412" data-tippy-delay="0,0" data-tippy-showoninit="true" data-tippy-placement="bottom-start" id="search-input" data-tippy-hideonclick="false" required="" />
        <div className="search-loader jetboost-infinite-loader-xnzx" ></div>
        <div className="search-btn">
          <div className="btn-container">
            <div className="svg w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
              <title>search</title>
              <g fill="none">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"></path>
              </g>
            </svg></div><input type="submit" value="" id="tippy" data-tippy-content="Search" className="btn w-button" />
          </div>
        </div>



        <div id="search-results" data-w-id="6775d597-59f5-51c9-c3cd-6208d3cfc418" className="search-results">
          <div className="jetboost-power jetboost-inactive-show-153x">



            <div className="suggestions-wrapper">
              <div className="suggestions">
                <div className="suggestions-text">You can search through <a href="#" className="suggestion-link">item name</a>
                </div>
              </div>
              <div className="search-result-sub-wrapper padding-fix">
                <div className="svg a---result-item-sub-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
                  <title>subdirectory_arrow_right</title>
                  <g fill="none">
                    <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" fill="currentColor"></path>
                  </g>
                </svg></div>
                <div className="suggestion-bottom-text">a <a href="#">category</a> or #<a href="#" id="hashtag">hashtag</a>
                </div>
              </div>
            </div>




          </div>
          <div className="jetboost-power jetboost-list-wrapper-empty-153x">
            <div className="suggestions-wrapper">
              <div className="suggestions">
                <div className="suggestions-text">No results with:</div>
                <div id="search-keyup" className="suggestions-text keyup">%s</div>
              </div>
              <div className="search-result-sub-wrapper padding-fix">
                <div className="svg a---result-item-sub-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
                  <title>subdirectory_arrow_right</title>
                  <g fill="none">
                    <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" fill="currentColor"></path>
                  </g>
                </svg></div>
                <div className="suggestion-bottom-text">try using a <a href="#">category</a> or #<a href="#" id="hashtag">hashtag</a>
                </div>
              </div>
            </div>
          </div>
          <div className="results-container jetboost-infinite-container-xnzx jetboost-active-show-153x">
            <div className="search-results-list jetboost-list-wrapper-xnzx jetboost-list-wrapper-153x jetboost-active-show-153x w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="search-result-collection-item w-dyn-item">
                  <div className="w-embed"><input type="hidden" className="jetboost-list-item" value="" /></div>
                  <div className="search-result-link-wrapper jetboost-active-show-r41r">
                    <a href="#" className="search-result-item w-inline-block">
                      <div className="result-name"></div>
                      <div id="tippy" data-tippy-content="Open" className="search-result-item-button">
                        <div className="svg-button">
                          <div className="html-embed w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
                            <g transform="translate(0 0)">
                              <g fill="none" className="nc-icon-wrapper">
                                <path d="M22 7h-9v2h9V7z" fill="currentColor"></path>
                                <path d="M22 15h-9v2h9v-2z" fill="currentColor"></path>
                                <path d="M22 11h-6v2h6v-2z" fill="currentColor"></path>
                                <path d="M13 12L8 7v4H2v2h6v4l5-5z" fill="currentColor"></path>
                              </g>
                            </g>
                          </svg></div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="search-result-sub-wrapper jetboost-active-show-r41r">
                    <div className="svg a---result-item-sub-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
                      <g transform="translate(0 0)">
                        <g fill="currentColor" className="nc-icon-wrapper">
                          <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" fill="currentColor"></path>
                        </g>
                      </g>
                    </svg></div>
                    <div className="result-item-divider">in</div>
                    <a href="#" className="result-item-link"></a>
                    <div className="result-item-divider">•</div>
                    <a href="#" className="result-item-link"></a>
                  </div>
                </div>
              </div>
              <div className="empty-state w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
            <div className="search-more-btn">
              <a id="search-more-button" href="#" className="search-more-button w-inline-block">
                <div>Search more results</div>
                <div className="svg button-svg w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="width" height="height" viewbox="0 0 24 24">
                  <title>north_east</title>
                  <g fill="currentColor">
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" fill="currentColor"></path>
                  </g>
                </svg></div>
              </a>
            </div>
            <div className="results-counter">
              <div className="text _1">Showing</div>
              <div className="text _2 jetboost-visible-items-xnzx">0</div>
              <div className="text _1">of</div>
              <div className="text _2 jetboost-total-results-xnzx">0</div>
              <div className="text _1">results</div>
            </div>
          </div>
        </div>
      </form>

    </div>
  )

}