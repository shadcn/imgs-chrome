chrome.contextMenus.create({
  "title": "rehost image", 
  "contexts": ["image"],
  "onclick": function (obj) {
    console.log(obj);
    var evt = model.unsorted.sendImageURL(obj.srcUrl);
    evt.type = "rehost";
    uploadDelegate(evt);
  }
});