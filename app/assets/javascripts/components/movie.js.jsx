var Movie = React.createClass({
    render: function(){
      return (
        <a href={"/movies/" + this.props.id}>
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 movie"
                   key={this.props.id}>
                <div className='movie'>
                  <div className="visible-xs visible-sm">
                    <div className="info-toggle">
                      <button className="info-toggle-button">
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div className='background_overlay'></div>
                  <BackdropImage backdropPath={this.props.backdrop_path} />
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
