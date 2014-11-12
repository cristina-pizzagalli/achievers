$(document).ready(function() {
  
  // Returns true if the specified element has been scrolled into the viewport.
  function isElementInViewport(elem) {
      var $elem = $(elem);

      // Get the scroll position of the page.
      var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
      var viewportTop = $(scrollElem).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      // Get the position of the element on the page.
      var elemTop = Math.round( $elem.offset().top );
      var elemBottom = elemTop + $elem.height();

      return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
  }
  
  
    $('#fullpage').fullpage({
        resize: false,
        afterLoad: function () {
          // restart animations
          $('.animation-1, .animation-2, .animation-3').each(function () {
            var $el = $(this);
            $el.removeClass('start')
            if (isElementInViewport(this)) {
              $el.addClass('start')
            }
          })
        }
    });
});
