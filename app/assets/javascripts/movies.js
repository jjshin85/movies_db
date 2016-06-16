$(document).ready(function(){

    // onMovieHover();

});

function onMovieHover(){
    $('#main-content').on('mouseenter mouseleave', '.movie', function(e){
      var movie = $(this);
      var title = movie.children('.movie_title');
      var overview = movie.children('.movie_overview');
      var image_container = movie.children('.image_container');
      var text_container = movie.children('.text_container');
      var image = movie.children('.image_container').children('img');
      var overlay = movie.children('.background_overlay');
      if(e.type == 'mouseenter')
      {
        text_container.css('display', 'flex');
        image.css('opacity', .5);
        overlay.css('opacity', .5);
      }
      else{
        text_container.css('display', 'none');
        image.css('opacity', 1);
        overlay.css('opacity', 0);
      }
    });
}
