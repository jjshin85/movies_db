var BASE_URL = "https://api.themoviedb.org/3";
var BASE_IMAGE_URL = "http://image.tmdb.org/t/p/";
var API_KEY;
var query = "?query=toy+story"
$(document).ready(function(){
    var image_size = "w92"
    API_KEY = "";
    var url = BASE_URL + "/movie/popular" + "?" + API_KEY;
    $.get(url, onSuccess);

    var image_url = BASE_IMAGE_URL + image_size + "/6bCplVkhowCjTHXWv49UjRPn0eK.jpg";

    $.get(image_url, function(data){
    });
});

function onSuccess(data){
  // console.log(data);
  // var movie_data = "";
  // data.results.forEach(function(element){
  //   movie_data += "{";
  //   movie_data += "original_title: " + '\"' + element.original_title + '\",';
  //   movie_data += "overview: " + '\"' + element.overview+ '\",';
  //   movie_data += "title: " + '\"' + element.title+ '\",';
  //   movie_data += "moviedb_id: " + element.id+ ',';
  //   movie_data += "vote_count: " + element.vote_count+ ',';
  //   movie_data += "vote_average: " + element.vote_average+ ',';
  //   movie_data += "poster_path: " + '\"' + element.poster_path+ '\",';
  //   movie_data += "release_date: " + '\"' + element.release_date+ '\",';
  //   movie_data += "original_language: " + '\"' + element.original_language+ '\"';
  //   movie_data += "},"
  // });
  // console.log(movie_data);
}
