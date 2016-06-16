var MovieContainer = React.createClass({
    getInitialState: function(){
      return { movie: this.props.movie }
    },

    render: function(){
      console.log(this.state.movie);
      return  <PosterImage posterPath={this.state.movie.poster_path}/>

    }
});
