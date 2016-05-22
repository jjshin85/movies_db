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
    return (<div className="row">
      <div className="col-lg-8 col-md-8 col-sm-8" id="searchbar">
        <div className="input-group">
          <input type="text"
            id="searchbox"
            className="form-control"
            placeholder="Search for movie..."
            value={this.state.userInput}
            onChange={this.updateSearchQuery}
            />
          <span className="input-group-btn">
            <button className="btn btn-default"
              id="search-button"
              type="button" onClick={this.handleSetQuery}
              >Search</button>
          </span>
        </div>
      </div>
    </div>
    );
  }
});
