console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.tabs.executeScript({
  code: 'console.log("hi");'
  });