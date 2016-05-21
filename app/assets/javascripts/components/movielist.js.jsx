var MovieList = React.createClass({
    render: function(){
      var list = this.props.movies.map(function(movieProps){
          return <Movie {...movieProps} />
      });
      return (<div>
        {list}
      </div>)
    }
});
