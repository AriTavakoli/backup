function searchForElement(element, searchString) {
  // Get all elements within the given element
  const elements = element.querySelectorAll('*');

  // Loop through all elements
  for (let element of elements) {
    // Get the innerHTML of the element
    const innerHTML = element.innerHTML;

    // Check if the innerHTML matches the search string
    if (innerHTML === searchString) {
      // Return the element if a match is found
      return element;
    }
  }

  // Return null if no matching element is found
  return null;
}

let cont = document.getElementsByClassName('--styled-bPFgqT wf-pskrdc')[0]
const element = searchForElement(cont,'.modaltoprow')