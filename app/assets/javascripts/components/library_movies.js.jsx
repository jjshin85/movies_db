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
    return { seconds: 0, libraryMovies: this.props.libraryMovies, library: this.props.library};
  },

  componentDidMount: function(){
    this.setInterval(this.libraryMovies, 5000);
  },

  libraryMovies: function(){
    $.ajax({
      url: "/users/" + this.props.library.user_id + "/libraries/" + this.props.library.id,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({libraryMovies: data});
      }.bind(this)
    });
  },

  render: function() {
    return (<ul>{this.state.libraryMovies.map(function (key, value){
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
