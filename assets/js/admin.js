jQuery(document ).ready( function(){
    jQuery(".ya_loading").fadeTo(600, 0);
    jQuery(".ya_loading_bg").fadeTo(600, 0);
    setTimeout(function(){
      jQuery(".ya_loading").remove();
      jQuery(".ya_loading_bg").remove();
    },600);

    
    jQuery(".button-primary").click(function() {
      jQuery("body").prepend('<div class="ya_loading_bg"><div class="ya_loading"></div></div>');
    });


});