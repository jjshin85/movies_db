$(document).ready(function(){
    onMovieHover();


});

function onMovieHover(){
    $('#main-content').on('mouseenter mouseleave', '.movie', function(e){
      var movie = $(this);
      var title = movie.children('.movie_title');
      var overview = movie.children('.movie_overview');
      var image = movie.children('.image_container').children('img');
      var overlay = movie.children('.background_overlay');
      if(e.type == 'mouseenter')
      {
        title.css('display', 'inherit');
        overview.css('display', 'inherit');
        // movie.children('.image_container').css('opacity', '.25');
        image.css('opacity', .25);
        overlay.css('opacity', .5);
      }
      else{
        title.css('display', 'none');
        overview.css('display', 'none');
        image.css('opacity', 1);
        overlay.css('opacity', 0);
      }
    });
}
