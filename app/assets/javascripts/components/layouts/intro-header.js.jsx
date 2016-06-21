var IntroHeader = React.createClass({
  getInitialState: function(){
    return { heading: "Filmed" }
  },
  render: function() {
      return (
        <div className="intro-header">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="intro-message">
                          <h1>{this.state.heading}</h1>
                          <h3 className="landing-sub-heading">Your resource for film</h3>
                          <hr className="intro-divider"></hr>
                          <IntroHeaderButtons />
                          <h4>All movie data provided by <a className="resource-name" href="https://www.themoviedb.org/">TMDb</a></h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
});
