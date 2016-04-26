$(document).ready(function(){
    $('#main-content').on('mouseenter', '.movie', function(e){
      var movie = $(this);
      var title = movie.children('.movie_title');
      title.css('display', 'inherit');

      var overview = movie.children('.movie_overview');
      overview.css('display', 'inherit');

      movie.children('.movie_image').css('opacity', .25);
    });
    $('#main-content').on('mouseleave', '.movie', function(e){
      var movie = $(this);
      var title = movie.children('.movie_title');

      title.css('display', 'none');
      var overview = movie.children('.movie_overview');
      overview.css('display', 'none');

      movie.children('.movie_image').css('opacity', 1);

    });
});