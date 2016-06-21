var MovieContainer = React.createClass({
    getInitialState: function(){
      return { movie: this.props.movie,
               cast: this.props.credits.cast.slice(0,4),
               crew: this.props.credits.crew.slice(0,4),
               showFullCast: false,
               showFullCrew: false}
    },

    setCredits: function() {
      if(this.state.showFullCrew) {
        this.state.crew = this.props.credits.crew;
      }
      else if(!this.state.showFullCrew) {
        this.state.crew = this.props.credits.crew.slice(0,4);
      }
      else if(this.state.showFullCast) {
        this.state.crew = this.props.credits.cast;
      }
      else if(!this.state.showFullCast) {
        this.state.cast = this.props.credits.cast.slice(0,4);
      }
    },

    setCreditsShowState: function(e) {
      var id = e.target.gettributes.id;
      var val = e.target.getAttribute('id');
      console.log(val);
      console.log(e.target);
      if(id == 'id="cast-toggle"'){
        console.log("what what");
        console.log(this.state.showFullCast);
        if(this.state.showFullCast){
          this.state.showFullCast = false;
        }
        else {
          this.state.showFullCast = true;
        }
        this.setCredits();
      }
      else {
        if(this.state.showFullCrew){
          this.state.showFullCrew = false;
        }
        else {
          this.state.showFullCrew = true;
        }
        this.setCredits();
      }
      console.log(this.state.showFullCast);
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
              <button className='more-info-toggle-button' id='cast-toggle' onClick={this.setCreditsShowState}>+</button>
            </ul>
            <ul className='credits-list'>
              <p>Crew:</p>
              <CreditList credits={this.state.crew} type="crew" showall='false'/>
              <button className='more-info-toggle-button' id='crew-toggle' onClick={this.setCreditsShowState}>+</button>
            </ul>
          </div>
        </div>
      );
    }
});
