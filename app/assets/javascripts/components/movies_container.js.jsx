var MoviesContainer = React.createClass({
  getInitialState: function() {
    return { query: '' }
  },
  setSearchQuery: function(input) {
    this.setState({ query: input });
  },
  // handleSearchClick: function() {
  //
  // },

  render: function(){
    return (<div>
        <p>from container, query: {this.state.query}</p>
        <SearchBar setQuery={this.setSearchQuery}/>
        <MovieList movies={this.props.movies} />
      </div>);
  }
});


var SearchBar = React.createClass({
  getInitialState: function(){
      return { userInput: '' }
  },
  updateSearchQuery: function(e){
      this.setState({ userInput: e.target.value });
  },
  handleSetQuery: function(){
      this.props.setQuery(this.state.userInput);
      this.setState({ userInput: '' });
  },
  render: function(){
    return (<div id="searchBar">
          <input type="text" value={this.state.userInput} onChange={this.updateSearchQuery} />
          <button onClick={this.handleSetQuery}>Search</button>
          <p>test</p>
          <p>partial: {this.state.userInput}</p>
          // <p>final: {this.state.query}</p>
        </div>
    );
  }
});
