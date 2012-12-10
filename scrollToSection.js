//
//  jQuery Scroll To Section Plugin by Andres Rojas (andresroberto2009@gmail.com)

$.fn.scrollToSection = function(options){
    
    function scrollToSection(id, time){
      $("body,html").animate({scrollTop: $(id).offset().top}, time);
    }

    $(this).on("click", "a", function(event) {
      event.preventDefault();
      var sectionName = $(this).attr("href");
      scrollToSection( sectionName, 1000);
    });

};