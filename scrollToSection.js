$.fn.scrollToSection = function(options){
    
    function scrollToSection(id, time){
      $("body").animate({scrollTop: $(id).offset().top}, time);
    }

    $(this).on("click", "a", function(event) {
      event.preventDefault();
      var sectionName = $(this).attr("href");
      scrollToSection( sectionName, 1000);
    });

};