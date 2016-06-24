var MoviesContainer = React.createClass({

  getInitialState: function() {
    return {
              movies: this.props.movies,
              noMatches: false,
              searchQuery: ''
           }
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
          if (data.movies.length > 0 ) {
            this.setState({ movies: data.movies, noMatches: false, searchQuery: '' });
          }
          else {
            this.setState({ movies: data.movies, noMatches: true, searchQuery: input })
          }
        }.bind(this)
      });
      // this.forceUpdate();
    }
  },

  render: function(){
    if(this.state.noMatches === true) {
      return(
        <div>
          <SearchBar setQuery={this.setSearchQuery}/>
          <h5 className='no-matches-flash'>
                        {
                          'Sorry, there were no matches for \"'
                          + this.state.searchQuery + '\".'
                        }
          </h5>
        </div>
      );
    }
    else {
      return (
        <div>
          <SearchBar setQuery={this.setSearchQuery}/>
          <MovieList movies={this.state.movies} />
        </div>
      );
    }
  }
});
