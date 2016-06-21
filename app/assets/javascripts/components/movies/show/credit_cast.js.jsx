var Cast = React.createClass({
  render: function() {
    return (
      <li key={this.props.id}>
          { this.props.character +  ": " + this.props.name }
      </li>
    );
  }
});
