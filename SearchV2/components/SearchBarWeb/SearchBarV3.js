// import './aris-fresh-site-e4b638.webflow.css'



export default function SearchBarV3() {
  return (


    <div class="search-box">
      <div class="search-form-group">
        <div class="search-form w-form"><img src="images/search-fat-1.svg" loading="lazy" alt="" class="search-icon" />
          <form id="email-form" name="email-form" data-name="Email Form" method="get">
            <input type="text" class="search jetboost-list-search-input-x4q9 w-input" maxlength="256" name="search" data-name="search" placeholder="Start typing something..." id="search" />
            <input type="submit" value="Submit" data-wait="Please wait..." class="submit-button w-button" />
          </form>
          <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <a href="#" class="clear-search-icon jetboost-list-search-reset-x4q9 jetboost-active-show-x4q9 w-inline-block"><img src="images/Group-423.svg" loading="lazy" alt="" class="image-2" /></a>
      </div>
      <div class="collection-list-group jetboost-active-show-x4q9">
        <div class="small-text cc-name">Search results</div>
        <div class="collection-list-wrapper jetboost-list-wrapper-x4q9 w-dyn-list">
          <div role="list" class="books-list w-dyn-items">
            <div role="listitem" class="w-dyn-item">
              <a href="#" class="book-item w-inline-block">
                <div class="book-information">
                  <div class="category-name"></div>
                  <div class="book-name"></div>
                </div>
                <div class="book-cta">
                  <div class="cta-name">Start reading</div><img src="images/arrow-left-alt-fill-5.svg" loading="lazy" alt="" class="image" />
                </div>
              </a>
              <div class="w-embed"><input type="hidden" class="jetboost-list-item" value="" /></div>
            </div>
          </div>
          <div class="empty-state w-dyn-empty">
            <div>No items found.</div>
          </div>
        </div>
      </div>
      <div class="no-results-group jetboost-list-wrapper-empty-x4q9">
        <div class="left-information"><img src="images/Group-426.svg" loading="lazy" alt="" class="no-result-icon" />
          <div>No results found for your search</div>
        </div>
        <a href="#" class="custom-browse-button w-inline-block">
          <div>Browse all articles</div><img src="images/arrow-left-alt-fill-5.svg" loading="lazy" alt="" class="arrow-icon" />
        </a>
      </div>
    </div>


  )
}