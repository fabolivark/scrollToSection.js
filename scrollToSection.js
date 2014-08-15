//
//  jQuery Scroll To Section Plugin by Andres Rojas (andresroberto2009@gmail.com)
(function ($) {
  $.fn.scrollToSection = function(options){

    this.options = options || {};

      function scrollToSection(id, time){
        var topMargin = options.topMargin || 0,
            $root     = $("html, body");

        $root.on("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
          $root.stop();
        });
        $root.animate({scrollTop: $(id).offset().top - topMargin}, time, function(){
          $root.off("scroll mousedown DOMMouseScroll mousewheel keyup");
        });
      }

      $(this).on("click", "a", function(event) {
        event.preventDefault();
        var sectionName = $(this).attr("href");
        scrollToSection( sectionName, 1000);
      });

  };
})(jQuery);