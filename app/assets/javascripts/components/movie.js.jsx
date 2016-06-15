var Movie = React.createClass({
    render: function(){
      return (
        <a href={"/movies/" + this.props.id}>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                   key={this.props.id}>
                <div className='movie'
                     data-id={this.props.id}>
                  <div className='background_overlay'></div>
                  <div className='image_container'>
                    <MovieImage backdropPath={this.props.backdrop_path} />
                  </div>
                  <div className='text_container'>
                    <h4 className='movie_title'>{this.props.title}</h4>
                    <div className='movie_info_divider'></div>
                    <p className="movie_overview">{this.props.overview}</p>
                  </div>
                </div>
              </div>
            </a>)
    }
});
