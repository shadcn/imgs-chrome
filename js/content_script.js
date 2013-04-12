// chrome.contextMenus.create({
//   "title": "rehost image", 
//   "contexts": ["image"],
//   "onclick": function (obj) {
//     console.log(obj);
//     var evt = model.unsorted.sendImageURL(obj.srcUrl);
//     evt.type = "rehost";
//     uploadDelegate(evt);
//   }
// });


/* *
 * Sniffer for actions sent from popup
 */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  switch(request.action){
    case 'takeShot':
      chrome.tabs.captureVisibleTab(null, function(img) {
        document.body.appendChild(image);
      });
      sendResponse({message : 'done'});;
    break;
  }
});
