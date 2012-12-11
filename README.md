inlinebackgrounds
=================

jQuery plugin.

Provides inline text backgrounds (think highlighting effect) to block elements


Inspiration from: http://samcroft.co.uk/2011/jquery-plugin-for-inline-text-backgrounds/


I combined the CSS boxshadow method with the jQuery method, with a fallback for browsers that don't support boxshadow (e.g. <IE9). 
This plugin also deals with WebOS browsers which give a false positive to boxshadow tests. 

jQuery plugin:

```
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
```

css:

```
p {
  /* this will later be removed, but provides fallback for non-supporting browsers */
  background: red; 

}

p span {
  background: red;
  display: inline;

  /* units as em for more responsive padding */
  -webkit-box-shadow:.25em 0 0 0 red,-.25em 0 0 0 red; 
  box-shadow: .25em 0 0 0 red,-.25em 0 0 0 red;

  /* not required but gives nice spacing effect */
  line-height: 1.425em;

  position: relative;
  left: .25em;
}
```


Usage:

```
$('p').inlinebackgrounds(Modernizr.boxshadow);
```

or:

```
$('p').inlinebackgrounds(Modernizr.boxshadow, true);
```

or

```
$('p').inlinebackgrounds(Modernizr.boxshadow, 'resetbg');
```

Last example would be accompanied with css class:

```
.resetbg { background-color:transparent!important }
```

If you've no need for Modernizr, you can simply pass in your own box shadow detection test (see http://www.sitepoint.com/detect-css3-property-browser-support/)

The second optional parameter will reset the background color of the passed in element (p) to transparent, if you pass a string instead of a boolean the string will be added as a class to the element. This class can likewise be used to set the bgcolor to transparent, or it could be used to emulate boxshadow or some other method.

The reason the second parameter is optional, is if you're using Modernizr for the test you can just do:

```
.no-boxshadow p {
  background-color: transparent!important;
}
```

Or of course, provide an alternative.




