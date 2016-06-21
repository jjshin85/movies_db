var CreditList = React.createClass({
  render: function() {
    var credits;
    if(this.props.type === 'cast'){
      credits = this.props.credits.map(function(castProps) {
        return <Cast {...castProps} />
      });
    }
    else {
      credits = this.props.credits.map(function(crewProps) {
        return <Crew {...crewProps} />
      });
    }
    return (<div>
              {credits}
            </div>);
  }

});
