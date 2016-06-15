var BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
var image_size_sm = "w780";
var NO_IMAGE_AVAILABLE_URL = "https://s3-us-west-1.amazonaws.com/moviedbnetwork/assets/images/noimageavailable.jpg";

var MovieImage = React.createClass({
  getInitialState: function() {
    return { backdropPath: this.props.backdropPath }
  },

  render: function(){
      if(this.state.backdropPath != null){
        return (
          <img className='movie_image' src={ BASE_IMAGE_URL + image_size_sm + this.state.backdropPath }/>
        );
      }
      else {
        return (
          <img className='missing_image' src={ NO_IMAGE_AVAILABLE_URL } />
        );
      }
  }
});
