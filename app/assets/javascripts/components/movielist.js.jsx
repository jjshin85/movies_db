var MovieList = React.createClass({
    getInitialState: function(){
      return { movies: this.props.movies };
    },

    render: function(){
      var list = this.props.movies.map(function(movieProps){
          return <Movie {...movieProps} />
      });
      return (<div>
        {list}
      </div>)
    }
});
