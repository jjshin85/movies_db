var BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
var image_size_sm = "w300";

var Movie = React.createClass({
    render: function(){
      return (<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={this.props.id} >
                <div className='movie'>
                  <div className='background_overlay'></div>
                  <div className='image_container'>
                    <img className='movie_image' src={ BASE_IMAGE_URL + image_size_sm + this.props.poster_path }/>
                  </div>
                  <div className='text_container'>
                    <p className="movie_overview">{this.props.overview}</p>
                    <div className="title_area">
                      <h4 className='movie_title'>{this.props.title}</h4>
                    </div>
                  </div>
                </div>
              </div>)
    }
});
