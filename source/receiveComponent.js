var HelloMessage = React.createClass({
  getInitialState: function () {
    return {type: 'say:'};
  },
  changeType: function () {
    this.setState({type: 'shout:'})
  },
  render: function () {
    return React.createElement("div", {onclick: this.changeType}, this.state.type, "Hello ", this.props.name);
  }
});


React.render(React.createElement(HelloMessage, {name: "John"}), document.getElementById("container"));