/**
 * popup js
 * will listen to user actions on popup
 * and send them to backgorund.js
 */
 (function($){
  
   $(function(){
    $('#container').on('click', function(e){
      var target = e.target;
      if(target.tagName == 'A' && target.parentNode.className == 'item'){

        var sc_type = $(target).data('type');

        chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
          tab = tabs[0];
          console.log(tab);
          chrome.tabs.sendMessage(tab.id, {
            action: 'takeShot', 
            options: {
            id: tab.id, // Id to identify the screenshot  
            sc_type: sc_type //Type of screen shot
          }
        }, function(response) {
          console.log(response, 'response')
        });
        });

      }
    })
  });
 })(jQuery)