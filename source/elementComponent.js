function hello() {
  alert('hello')
}


var element = React.createElement('div', {id: 'test', onclick: hello}, 'click me');

React.render(element, document.getElementById("container"));