var MovieContainer = React.createClass({
    getInitialState: function(){
      return {
               movie: this.props.movie,
               cast: this.props.credits.cast.slice(0,4),
               crew: this.props.credits.crew.slice(0,4),
              }
    },

    render: function(){
      var genres = this.state.movie.genres.map(function(genre){
          return <li key={genre.id}>{genre.name}</li>
      });

      return (
        <div className="movie-container">
          <PosterImage posterPath={this.state.movie.poster_path}/>
          <div className='movie-info'>
            <h3 className="title">{this.state.movie.title}</h3>
            <p className="overview">{this.state.movie.overview}</p>
            <ul>
              <p>Genre:</p>
              {genres}
            </ul>
            <ul className='credits-list'>
              <p>Cast:</p>
              <CreditList credits={this.state.cast} type="cast" showall='false'/>
              <a href={"/movies/" + this.props.movie.id + "/cast" }><button>Explore full cast</button></a>
          </ul>
            <ul className='credits-list'>
              <p>Crew:</p>
              <CreditList credits={this.state.crew} type="crew" showall='false'/>
              <a href={"/movies/" + this.props.movie.id + "/crew" }><button>Explore full crew</button></a>
            </ul>
          </div>
        </div>
      );
    }
});
