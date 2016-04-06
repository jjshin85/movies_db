var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};


var Library = React.createClass({

  mixins: [SetIntervalMixin],
  getInitialState: function(){
    return {seconds: 0,  libraries: this.props.libraries};
  },

  componentDidMount: function(){
    this.setInterval(this.libraries, 5000);
  },

  libraries: function(){
    $.ajax({
      url: "/users/" + {this.props.user.id} + "/libraries",
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({libraries: data});
      }.bind(this)
    });
  },

  render: function() {
     return (<ul>{this.state.libraries.map(function (key, value){
        return <li className="library" key={key.id} >
          <p className='library_title'>{key.title}</p>
        </li>;
      })}
    </ul>)
  }
});
