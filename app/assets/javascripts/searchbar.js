$(document).ready(function(){

    var searchbar = $('#searchbar');
    searchbar.keyup(function(event){
      if(event.keyCode === 13){
          $("#search-button").click();
      }
    })

});
