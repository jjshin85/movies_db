// var BASE_IMAGE_URL = "http://image.tmdb.org/t/p/";
//
// var image_size = "w300";
// $(document).ready(function(){
//
//     // $.get(url, onSuccess);
//
//     $('#search_query').on('submit', function(e){
//       e.preventDefault();
//       var movie_query = '?query=' + $('#movie_query').val();
//       movie_query = movie_query.replace(" ", "+");
//       var url = "/movies" + movie_query;
//       console.log(url);
//       console.log("query results:");
//       // $.get(url, onSuccess);
//     })
//
// });
//
// function onSuccess(data){
//   console.log(data);
//   //this class needs to be the same as defined in the 'movies.js.jsx' file
//   $(".col-lg-3").empty();
//   $('.col-md-4').empty();
//   $('.col-sm-6').empty();
//   $('.col-xs-12').empty();
//   data.results.forEach(function(element){
//     var html_element = "";
//     html_element += "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-7' key="+element.id + ">";
//     html_element += "<div class='movie'>";
//     html_element += "<div class='background_overlay'></div>";
//     html_element += "<div class='image_container'>";
//     html_element += "<img class='movie_image' src="+BASE_IMAGE_URL+image_size+element.poster_path+"/>";
//     html_element += "</div>";
//     html_element += "<div class='text_container'>"
//     html_element += "<p class='movie_overview'>"+element.overview+"</p>";
//     html_element += "<div className='title_area'>";
//     html_element += "<h4 class='movie_title'>" + element.title + "</h4>";
//     //closing div tags
//     html_element += "</div></div></div></div>";
//
//     $('#movies').append(html_element);
//   });
// }
