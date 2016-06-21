var IntroHeaderButtons = React.createClass({
  render: function() {
    var moviesButton = {
                          href: "/movies",
                          displayVal: "Search Movies"
                        }
    var githubButton = {
                          href: "https://github.com/jjshin85/movies_db",
                          displayVal: "View Code"
                        }
    return(
      <ul className="list-inline intro-social-buttons">
          <li>
              <a href={moviesButton.href}
                 className="btn btn-lg social-buttons">
                 <span className="network-name">{moviesButton.displayVal}</span>
              </a>
          </li>
          <li>
                <a href={githubButton.href}
                   className="btn btn-lg social-buttons">
                   <span className="network-name">{githubButton.displayVal}</span>
                </a>
          </li>
      </ul>
    );
  }
});
