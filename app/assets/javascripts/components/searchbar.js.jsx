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
        </div>
    );
  }
});
