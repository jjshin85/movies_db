//global variables for images held within backdrop_image.js.jsx file

var PosterImage = React.createClass({
  getInitialState: function() {
    return { posterPath: this.props.posterPath }
  },

  render: function(){
      if(this.state.posterPath != null){
        return (
          <img className='poster_image' src={ BASE_IMAGE_URL + IMAGE_SIZE_MED + this.state.posterPath }/>
        );
      }
      else {
        return (
          <img className='missing_image' src={ NO_IMAGE_AVAILABLE_URL } />
        );
      }
  }
});
