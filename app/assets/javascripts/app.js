var BASE_URL = "https://api.themoviedb.org/3";
var BASE_IMAGE_URL = "http://image.tmdb.org/t/p/w500";
var API_KEY = "?api_key=57a0094feba8795fd8cd00ca9f2c8001"

$(document).ready(function(){
    $.get(BASE_URL + "/search/movie" + API_KEY, onSuccess);

    var image_url = BASE_IMAGE_URL + "/6bCplVkhowCjTHXWv49UjRPn0eK.jpg";

    $('.test').append('<img src="' + image_url + '">');
});

function onSuccess(data){
  console.log(data);
  data.results.forEach(function(element){
    console.log(element.original_title);
    console.log(element.overview);
  })
  $('.test').append();
}

