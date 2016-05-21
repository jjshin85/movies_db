var MoviesContainer = React.createClass({
  getInitialState: function() {
    return { movies: this.props.movies }
  },
  setSearchQuery: function(input) {
    this.searchMovies(input);
  },
  searchMovies: function(input){
    var query = input.replace(" ", "+");
    console.log(query);
    var searchURL = "/movies/?query=" + query;
    console.log(searchURL);
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
  },

  render: function(){
    return (<div>
        <p>from container, query: {this.state.query}</p>
        <SearchBar setQuery={this.setSearchQuery}/>
        <MovieList movies={this.state.movies} />
      </div>);
  }
});