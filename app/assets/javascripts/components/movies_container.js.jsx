var MoviesContainer = React.createClass({
  getInitialState: function() {
    return { movies: this.props.movies }
  },
  setSearchQuery: function(input) {
    this.searchMovies(input);
  },
  searchMovies: function(input){
    var query;
    if(input != ""){
      query = input.replace(" ", "+");
      var searchURL = "/movies/?query=" + query;
      $.ajax({
        url: searchURL,
        dataType: 'json',
        type: 'GET',
        cache: false,
        success: function(data){
          console.log(data)
          this.setState({ movies: data.movies });
        }.bind(this)
      });
    }
  },
  render: function(){
    return (<div>
        <SearchBar setQuery={this.setSearchQuery}/>
        <MovieList movies={this.state.movies} />
      </div>);
  }
});
