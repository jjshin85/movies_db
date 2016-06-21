var Crew = React.createClass({
  render: function() {
    return (
      <li key={this.props.id}>
          { this.props.job + ": " + this.props.name }
      </li>
    );
  }
});
