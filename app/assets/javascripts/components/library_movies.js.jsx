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


var LibraryMovie = React.createClass({

  mixins: [SetIntervalMixin],
  getInitialState: function(){
    return { seconds: 0, movies: this.props.movies, library_id: this.props.library_id, user_id: this.props.user_id };
  },

  componentDidMount: function(){
    this.setInterval(this.libraryMovies, 5000);
  },

  libraryMovies: function(){
    $.ajax({
      url: "/users/" + this.props.user_id + "/libraries/" + this.props.library_id,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data){
        this.setState({movies: data});
      }.bind(this)
    });
  },

  render: function() {
    return (<ul>{this.state.movies.map(function (key, value){
        return <li className="movie_div" key={key.id} >
          <p className='movie_title'>{key.title}</p>
          <p className="movie_description">{key.description}</p>
          <p className='movie_release_year'>{key.release_year}</p>
          <img className='movie_image' src={key.image_url}/>
        </li>;
      })}
    </ul>)
  }
});
