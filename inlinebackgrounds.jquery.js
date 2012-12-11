  (function($){
    $.fn.inlinebackgrounds = function(bsTst, resetBg) {
      //webOs gives a false positive for boxshadows
      var isWebOS = /webos/i.test(navigator.userAgent.toLowerCase());
      if (!bsTst || isWebOS) { return;  }
    
      $.each(this, function(i,t) {
        var $t = $(t);
        if (resetBg) {
          if (typeof resetBg === 'string') {
            $t.addClass(resetBg);
          } else {
            $t.css({'background-color':'transparent'})
          }
        }
        
        $t.wrapInner('<span>');
        
      });
    }
  })(jQuery);
