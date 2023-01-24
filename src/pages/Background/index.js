console.log('This is the background page.');
console.log('Put the background scripts here.');



let p;

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "createPopup") {
      chrome.windows.create({
        url: 'popup.html',
        type: 'popup',
        width: 300,
        height: 400
      },
        function (request, sender, sendResponse) {
          console.log(request.message); // "Hello from the content script!"
          sendResponse({ message: "Hello from the background script!" });
        });
    }
  });

chrome.runtime.onConnect.addListener(function (port) {
  console.log("Connection established: ", port);
  if (port.name === "myConnectionName") {

    p = port;
    port.onMessage.addListener(function (msg) {
      // Handle message from popup here
      console.log("Message received from popup: ", msg);
    });
  }
});





// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     if (request.message === "yessir") {
//       console.log('yessir')
//     }
//   });



chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request.message);
    console.log(request);
    if (request.message == "relay") {
      //send message to popup
      p.postMessage({ message: "Hello from the background script" });
    }
  });



// function createNewWindow(left, top, width, height) {
//   chrome.windows.create({
//     url: 'popup.html',
//     type: "popup",
//     tabId: 'popup',
//     left: left,
//     top: top,
//     width: width,
//     height: height
//   });
// }


// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     if (request.message === "create") {
//       // Perform the desired action here
//       createNewWindow(0, 0, 400, 400);

//     }
//   });


// chrome.runtime.onConnect.addListener(function (port) {
//   console.log("Connection established with the content script");
//   createNewWindow(0, 0, 400, 400);


//   //on connect to the content script
//   port.onMessage.addListener(function(msg) {
//     console.log("Message received from content script: " + msg.message);
//     // Send a message back to the content script
//     port.postMessage({ response: "Hello from the background script" });
// });





//   chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
//     port.postMessage({
//       message: 'disconnect'
//     })
//     port.disconnect();
//   });


// });





