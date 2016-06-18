
var MovieThumb = React.createClass({
    render: function() {
            return (
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={this.props.id}>
                    <div className="thumb-container" >
                      <a href={"/movies/" + this.props.id}>
                          <div className='background-overlay'></div>
                          <BackdropImage backdropPath={this.props.backdrop_path} />
                          <div className='info-container'>
                            <h4 className='thumb-title'>{this.props.title}</h4>
                            <div className='thumb-info-divider'></div>
                            <p className="thumb-overview">{this.props.overview}</p>
                          </div>
                      </a>
                    </div>
                </div>
            );
    }
});
