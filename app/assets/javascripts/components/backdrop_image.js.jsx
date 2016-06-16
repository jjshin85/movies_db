var BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
var IMAGE_SIZE_MED = "w780";
var NO_IMAGE_AVAILABLE_URL = "https://s3-us-west-1.amazonaws.com/moviedbnetwork/assets/images/noimageavailable.jpg";

var BackdropImage = React.createClass({
  getInitialState: function() {
    return { backdropPath: this.props.backdropPath }
  },

  render: function(){
      if(this.state.backdropPath != null){
        return (
          <img className='movie_image' src={ BASE_IMAGE_URL + IMAGE_SIZE_MED + this.state.backdropPath }/>
        );
      }
      else {
        return (
          <img className='missing_image' src={ NO_IMAGE_AVAILABLE_URL } />
        );
      }
  }
});
