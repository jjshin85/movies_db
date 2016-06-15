var NO_IMAGE_AVAILABLE_URL = "https://s3-us-west-1.amazonaws.com/moviedbnetwork/assets/images/noimageavailable.jpg";

var MovieImage = React.createClass({
  getInitialState: function() {
    return { posterPath: this.props.posterPath }
  },

  render: function(){
      if(this.state.posterPath != null){
        return (
          <img className='movie_image' src={ BASE_IMAGE_URL + image_size_sm + this.state.posterPath }/>
        );
      }
      else {
        return (
          <img className='missing_image' src={ NO_IMAGE_AVAILABLE_URL } />
        );
      }
  }
});
