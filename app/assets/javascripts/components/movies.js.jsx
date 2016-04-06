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
    this.setInterval(this.movies, 5000);
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
     return (<div>{this.state.movies.map(function (key, value){
        return <div className="movie_div" key={key.id} >
          <p className='movie_title'>{key.title}</p>
          <p className="movie_description">{key.description}</p>
          <p className='movie_release_year'>{key.release_year}</p>
          <img className='movie_image' src={key.image_url}/>
        </div>;
      })}
    </div>)
  }
});
