chrome.contextMenus.create({
  "title": "Send to imgs.io", 
  "contexts": ["image"],
  "onclick": function (info, tab) {
    var url = info.srcUrl;
    uploadImage(url);
  }
});


function uploadImage(url) {
  chrome.browserAction.setBadgeText({ 'text': 'Transloading...' });
  $.ajax({
    type: 'post',
    url: 'http://api.imgs.io/v1/images',
    data: {
      type: 'url',
      file: url
    },
    success: function(data) {
      showImage(data.links.image);
      chrome.browserAction.setBadgeText({ 'text': '' });
    }
  });
}

function showNotification(text) {
  var notification = webkitNotifications.createNotification(
    'images/icon-48.png',
    '',
    text
  );
  notification.show();
}

function showImage(url) {
  chrome.tabs.create({'url': url}, function(tab) {
    // Tab opened.
  });
}
