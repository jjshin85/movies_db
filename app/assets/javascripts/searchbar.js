$(document).ready(function(){

    var searchbar = $('#searchbox');
    searchbar.keyup(function(event){
      if(event.keyCode == 13){
          $("#search-button").click();
      }
    })
});
