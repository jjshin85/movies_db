var NavbarLink = React.createClass({
  render: function(){
    return(
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/movies" className='navbar-link'>Search Movies</a>
        </li>
        <li>
          <a href="https://github.com/jjshin85/movies_db" className='navbar-link'>View Code</a>
        </li>
      </ul>
    );
  }
});
