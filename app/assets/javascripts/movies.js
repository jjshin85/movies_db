$(document).ready(function(){
    // onLongClick();
});

function onLongClick() {
  $('#main-content').on('mousedown mouseup', '.movie', function(e){

    var movie = $(this);
    var text_container = movie.children('.text_container');
    var image = movie.children('.movie_image');
    var overlay = movie.children('.background_overlay');

    var startTime, endTime, totalTime;
    if(e.type == 'mousedown')
    {
      startTime = e.timeStamp;
      console.log("start time: " + startTime);
      text_container.css('display', 'flex');
      image.css('opacity', .5);
      overlay.css('opacity', .5);
    }
    else if(e.type == 'mouseup') {
      endTime = e.timeStamp;
      console.log("end time: " + endTime);
      totalTime = endTime - startTime;
      console.log(totalTime);
      text_container.css('display', 'none');
      image.css('opacity', 1);
      overlay.css('opacity', 0);
    }


  });
}
