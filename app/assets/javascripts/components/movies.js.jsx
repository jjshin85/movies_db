  var BASE_IMAGE_URL = "http://image.tmdb.org/t/p/";
var BASE_URL = "https://api.themoviedb.org/3";
var API_KEY;
var image_size_sm = "w300";

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};


var Movie = React.createClass({

  mixins: [SetIntervalMixin],
  getInitialState: function(){
    return {seconds: 0,  movies: []};
  },

  componentDidMount: function(){
    this.setInterval(this.movies, 10000000000);
  },

  movies: function(){
    $.ajax({
      url: "http://www.omdbapi.com/?s=mad+max",
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data){
        this.setState({movies: data.Search});
      }.bind(this)
    });
  },
  render: function()
  {
    return (
      <SearchQuery query={this.SearchQuery} />
      <div className='container'>{this.state.movies.map(function (key, value)
        {
          return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key.imdbID}>
            <div className='movie'>
              <div className='background_overlay'></div>
              <div className='image_container'>
                <img className='movie_image' src={ key.Poster }/>
              </div>
              <div className='text_container'>
                // <p className="movie_overview">{key.overview}</p>
                <div className="title_area">
                  <h4 className='movie_title'>{key.Title}</h4>
                </div>
              </div>
            </div>
          </div>;
        })}
      </div>)
  }
});

var SearchQuery = React.createClass({
  getInitialState: function(){
    return {
      search_query: ''
    }
  },
  updateSearchQuery: function(e){
    this.setState({
      search_query: e.target.value
    });
  },
  handleQuery: function(){

    });
  },
  render: function(){
    return (
        <div>
          <input type="text" value={this.state.search_query} onChange={this.updateSearchQuery} />
          <button onClick={this.handleQuery}> Search </button>
        </div>
    );
  }
});
  // render: function()
  // {
  //   return (<div className='container'>{this.state.movies.map(function (key, value)
  //     {
  //       return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key.id} >
  //               <div className='movie'>
  //                 <div className='background_overlay'></div>
  //                 <div className='image_container'>
  //                   <img className='movie_image' src={ BASE_IMAGE_URL + image_size_sm + key.poster_path }/>
  //                 </div>
  //                 <div className='text_container'>
  //                   <p className="movie_overview">{key.overview}</p>
  //                   <div className="title_area">
  //                     <h4 className='movie_title'>{key.title}</h4>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>;
  //     })}
  //   </div>)
  // }
