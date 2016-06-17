var MovieContainer = React.createClass({
    getInitialState: function(){
      return { movie: this.props.movie }
    },

    render: function(){
      console.log(this.state.movie);
      return (
        <div className="col-lg-4 col-md-6 col-sm-12">
          <PosterImage posterPath={this.state.movie.poster_path}/>
          <h3>{this.state.movie.title}</h3>
        </div>
      );
    }
});
