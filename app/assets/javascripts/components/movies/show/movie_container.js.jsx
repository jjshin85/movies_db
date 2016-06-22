var MovieContainer = React.createClass({
    getInitialState: function(){
      return {
               movie: this.props.movie,
               cast: this.props.credits.cast.slice(0,4),
               crew: this.props.credits.crew.slice(0,4),
               release_date: this.props.movie.release_date.slice(0,4)
              }
    },

    render: function(){
      console.log(this.props.movie);
      var genres = this.state.movie.genres.map(function(genre){
          return <li key={ genre.id } >{ genre.name }</li>
      });

      return (
        <div className="movie-container">
          <div className='poster-container col-lg-6 col-md-6 col-sm-6'>
            <PosterImage posterPath={ this.state.movie.poster_path }/>
          </div>
          <div className='movie-info col-lg-6 col-md-6 col-sm-6'>
            <h3 className="movie-title">{ this.state.movie.title
                + " (" + this.state.release_date + ")" }</h3>
            <p className="overview">{this.state.movie.overview}</p>
            <ul className='credits-list'>
              <h5>Genre:</h5>
              {genres}
            </ul>
            <ul className='credits-list'>
              <h5>Cast:</h5>
              <CreditList credits={this.state.cast} type="cast" showall='false'/>
              <a href={"/movies/" + this.props.movie.id + "/cast" }><button>Explore full cast</button></a>
            </ul>
            <ul className='credits-list'>
              <h5>Crew:</h5>
              <CreditList credits={this.state.crew} type="crew" showall='false'/>
              <a href={"/movies/" + this.props.movie.id + "/crew" }><button>Explore full crew</button></a>
            </ul>
          </div>
        </div>
      );
    }
});
