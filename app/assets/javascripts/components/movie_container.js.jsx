var MovieContainer = React.createClass({
    getInitialState: function(){
      return { movie: this.props.movie, credits: this.props.credits }
    },

    render: function(){
      console.log(this.state.movie);
      console.log(this.state.credits);
      var genres = this.state.movie.genres.map(function(genre){
          return <li key={genre.id}>{genre.name}</li>
      });

      var cast = this.state.credits.cast.map(function(cast){
        return (<li key={cast.id}>
                      {
                        cast.character +
                        ": " +
                        cast.name
                      }
                </li>
              );
      });
      var crew = this.state.credits.crew.map(function(crew){
        return (<li key={crew.id}>
                      {
                        crew.job +
                        ": " +
                        crew.name
                      }
                </li>
              );
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
            <ul>
              <p>Cast:</p>
              {cast}
            </ul>
            <ul>
              <p>Crew:</p>
              {crew}
            </ul>
          </div>
        </div>
      );
    }
});
