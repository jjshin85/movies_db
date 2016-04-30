var BASE_URL = "https://api.themoviedb.org/3";
var BASE_IMAGE_URL = "http://image.tmdb.org/t/p/";
var API_KEY;
var query = "?";
var image_size = "w92";
$(document).ready(function(){

    API_KEY = 'api_key=57a0094feba8795fd8cd00ca9f2c8001';
    var url = BASE_URL + "/search/movie" + "?" + API_KEY;
    $('#search_query').on('submit', function(e){
      e.preventDefault();

      var movie_query = '&query=' + $('#movie_query').val();
      movie_query = movie_query.replace(" ", "+");
      url += movie_query;
      console.log(url);
      console.log("query results:");
      $.get(url, onSuccess);
    })

});

function onSuccess(data){
  console.log(data);
  $('.col-md-4').empty();
  data.results.forEach(function(element){
    var html_element = "";
    html_element += "<div class='col-md-4' key="+element.id + ">";
    html_element += "<div class='movie'>";
    html_element += "<div class='background_overlay'></div>";
    html_element += "<div class='image_container'><img class='movie_image' src="+BASE_IMAGE_URL + image_size_sm + element.poster_path+"/></div>";
    html_element += "<p class='movie_overview'>"+element.overview+"</p>";
    html_element += "<h4 class='movie_title'>" + element.title + "</h4>";
    html_element += "</div></div>";

    $('#movies').append(html_element);
  });
}
