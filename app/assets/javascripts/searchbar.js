$(document).ready(function(){

    var searchbar = $('#search-input');
    searchbar.keyup(function(event){
      if(event.keyCode === 13){
          $("#search-button").click();
      }
    })

});
