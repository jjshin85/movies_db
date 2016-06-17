//poster sizes:
var xx_small = "w154";
var x_small = "w185";
var small = "w342";
var med =  "w500";
var lrg = "w780";
var x_lrg = "original";

var PosterImage = React.createClass({
  getInitialState: function() {
    return { posterPath: this.props.posterPath }
  },

  render: function(){
      if(this.state.posterPath != null){
        return (
          <img className='poster-image' src={ BASE_IMAGE_URL + small + this.state.posterPath }/>
        );
      }
      else {
        return (
          <img className='missing_image' src={ NO_IMAGE_AVAILABLE_URL } />
        );
      }
  }
});
