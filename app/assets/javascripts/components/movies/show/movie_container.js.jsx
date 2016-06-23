var MovieContainer = React.createClass({
    getInitialState: function(){
      return {
               movie: this.props.movie,
               cast: this.props.credits.cast.slice(0,4),
               crew: this.props.credits.crew.slice(0,4),
               release_date: this.props.movie.release_date.slice(0,4),
               showFullCast: false,
               showFullCrew: false,
               castToggleTxt: 'Show more',
               crewToggleTxt: 'Show more'
              }
    },

    handleCastToggle: function(){
      if(this.state.showFullCast === false){
        this.setState({
                        cast: this.props.credits.cast,
                        showFullCast: true,
                        castToggleTxt: 'Show less'
                      });

      }
      else {
        this.setState({
                        cast: this.props.credits.cast.slice(0,4),
                        showFullCast: false,
                        castToggleTxt: 'Show more'
                      });
      }
    },

    handleCrewToggle: function(){
      if(this.state.showFullCrew === false){
        this.setState({
                        crew: this.props.credits.crew,
                        showFullCrew: true,
                        crewToggleTxt: 'Show less'
                      });

      }
      else {
        this.setState({
                        crew: this.props.credits.crew.slice(0,4),
                        showFullCrew: false,
                        crewToggleTxt: 'Show more'
                      });
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
              <h5 className='category-header'>Genre:</h5>
              {genres}
            </ul>
            <ul className='credits-list'>
              <h5 className='category-header'>Cast:</h5>
              <CreditList credits={this.state.cast} type="cast" showall='false'/>
              <button className="btn btn-sm credits-btn" onClick={this.handleCastToggle}>
                <span className='credits-btn-content'>{this.state.castToggleTxt}</span>
              </button>
            </ul>
            <ul className='credits-list'>
              <h5 className='category-header'>Crew:</h5>
              <CreditList credits={this.state.crew} type="crew" showall='false'/>
              <button className="btn btn-sm credits-btn" onClick={this.handleCrewToggle}>
                <span className='credits-btn-content'>{this.state.crewToggleTxt}</span>
              </button>
            </ul>
          </div>
        </div>
      );
    }
});
