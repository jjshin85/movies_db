var BASE_IMAGE_URL = "http://image.tmdb.org/t/p/";
var image_size_sm = "w154";

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

  render: function() {
     return (<div class='container'>{this.state.movies.map(function (key, value){
        return <div class='movie'>
          <div className="col-xs-6 col-sm-3" key={key.id} >
            <img className='movie_image' src={BASE_IMAGE_URL + image_size_sm + key.poster_path}/>
            <p className='movie_title'>{key.title}</p>
            <p className="movie_overview">{key.overview}</p>
            <p className='movie_release_date'>{key.release_date}</p>
            </div>
          </div>;
      })}
    </div>)
  }
});
