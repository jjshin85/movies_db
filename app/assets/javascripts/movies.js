$(document).ready(function(){
    $('#main-content').on('hover', '.movie', function(e){
      console.log("mouseOver event bound");
        // console.log(this.('.movie_overview'));
    });
});