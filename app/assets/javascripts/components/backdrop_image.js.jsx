var BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
var small_size = "w300";
var med_size = "w780";
var NO_IMAGE_AVAILABLE_URL = "https://s3-us-west-1.amazonaws.com/moviedbnetwork/assets/images/noimageavailable.jpg";

var BackdropImage = React.createClass({
  getInitialState: function() {
    return { backdropPath: this.props.backdropPath }
  },

  render: function(){
      if(this.state.backdropPath != null){
        return (
          <img className='movie_image' src={ BASE_IMAGE_URL + med_size + this.state.backdropPath }/>
        );
      }
      else {
        return (
          <img className='missing_image' src={ NO_IMAGE_AVAILABLE_URL } />
        );
      }
  }
});
