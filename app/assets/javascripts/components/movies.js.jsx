var BASE_IMAGE_URL = "http://image.tmdb.org/t/p/";
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
    return {seconds: 0,  movies: this.props.movies};
  },

  componentDidMount: function(){
    this.setInterval(this.movies, 100000000);
  },

  movies: function(){
    $.ajax({
      url: "/movies",
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({movies: data});
      }.bind(this)
    });
  },

  render: function()
  {
    return (<div className='container'>{this.state.movies.map(function (key, value)
      {
      return <div className="col-xs-6 col-sm-3" key={key.id} >
                <div className='movie'>
                  <div className='background_overlay'></div>
                  <div className='image_container'>
                    <img className='movie_image' src={ BASE_IMAGE_URL + image_size_sm + key.poster_path }/>
                  </div>
                  <h4 className='movie_title'>{key.title}</h4>
                  <p className="movie_overview">{key.overview}</p>
                  <h5 className='movie_release_date'>{key.release_date}</h5>
                </div>
              </div>;
      })}
    </div>)
  }
});
