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
    return {seconds: 0,  libraries: this.props.libraries, user_id: this.props.user_id};
  },

  componentDidMount: function(){
    this.setInterval(this.libraries, 5000);
  },

  libraries: function(){
    $.ajax({
      url: "/users/" + this.props.user_id + "/libraries",
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({ libraries: data });
      }.bind(this)
    });
  },

  render: function() {

     return (<ul>{this.state.libraries.map(function (key, value){
        return <li className="library" key={key.id} >
          <a href={'/users/' + key.user_id + '/libraries/' + key.id}>
            <p className='library_name'>{key.name}</p>
          </a>
        </li>;
      })}
    </ul>)
  }
});
