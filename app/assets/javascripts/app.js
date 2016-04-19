var BASE_URL = "https://api.themoviedb.org/3";
var BASE_IMAGE_URL = "http://image.tmdb.org/t/p/";
var API_KEY;
var query = "?query=toy+story"
$(document).ready(function(){
    var image_size = "w92"
    API_KEY = "";
    var url = BASE_URL + "/search/movie" +  query + "&" + API_KEY;
    $.get(url, onSuccess);

    var image_url = BASE_IMAGE_URL + image_size + "/6bCplVkhowCjTHXWv49UjRPn0eK.jpg";



    $.get(image_url, function(data){
    });
});

function onSuccess(data){
  console.log(data);
  console.log(data[0]);
  data.results.forEach(function(element){
    console.log(element.original_title);
    console.log(element.overview);
    $('.test').append('<img src=' + image_url + '>');
  })
  $('.test').append();
}

