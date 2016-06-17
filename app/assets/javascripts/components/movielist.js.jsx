var MovieList = React.createClass({
    render: function(){
      var list = this.props.movies.map(function(movieProps){
          return <MovieThumb {...movieProps} />
      });
      return (<div>
        {list}
      </div>)
    }
});
